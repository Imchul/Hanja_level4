const fs = require('fs');
const hanjaDictionary = require('./node_modules/hanja/lib/data/hanjaeum.json');

// Dictionary format: { "家": "가", ... } ? Assume so.
// Or list? I'll assume object.


const rawText = fs.readFileSync('raw_hanja_full.txt', 'utf8');

// Helper to remove lines with digits (headers/footers)
// But be careful: some definitions might have numbers? Unlikely for 4th grade.
// Safe bet: Exclude lines with "4급", "Page", etc.
// Actually, let's just create a big stream of clean text.

const lines = rawText.split('\n');
let cleanLines = lines.filter(line => {
    // Filter out obvious noise
    if (line.includes('4급')) return false;
    if (line.includes('4合')) return false; // Header garbage
    if (line.trim().length === 0) return false;
    return true;
});

// Extract all Hanja characters from valid lines
// We assume Hanja and Readings are preserved in relative order.
// We will collect ALL Hanja found, and ALL Hangul tokens found.

const allHanjaRegex = /[\u4e00-\u9fa5]/g; // CJK Unified Ideographs
const allHangulRegex = /[가-힣]+/g;

let hanjaList = [];
let hangulTokens = [];

cleanLines.forEach(line => {
    // Check if line is "Hanja Line" or "Reading Line"
    const hanjas = line.match(allHanjaRegex);
    const hanguls = line.match(allHangulRegex);

    if (hanjas && (!hanguls || hanguls.length < hanjas.length)) {
        // Likely a Hanja line (mostly Hanja)
        hanjaList.push(...hanjas);
    } else if (hanguls) {
        // Likely a Reading line 
        // Sometimes readings are spaced: "집 가" which is 2 tokens.
        // We really want to join everything and tokenize properly.
        // But our logic relies on `cleanLines` order being preserved.
        const filteredHanguls = hanguls.filter(h => !['연습문제', '페이지'].includes(h));
        hangulTokens.push(...filteredHanguls);
    } else if (hanjas) {
        // Mixed line? 
        hanjaList.push(...hanjas);
    }
});

console.log(`Found ${hanjaList.length} Hanjas.`);
console.log(`Found ${hangulTokens.length} Hangul Tokens.`);

// Now aligning
const results = [];
let tokenIdx = 0;

for (let i = 0; i < hanjaList.length; i++) {
    const char = hanjaList[i];

    // Skip if we ran out of tokens
    if (tokenIdx >= hangulTokens.length) break;

    // Get expected sound
    // converting single char
    // hanja.translate(char) returns the hangul sound?
    // Let's verify usage of 'hanja' package.
    // Usually hanja.translate(string, mode).
    // If output is array or string.
    let expectedSound = "";
    if (hanjaDictionary[char]) {
        expectedSound = hanjaDictionary[char];
    }

    // Heuristic:
    // Consume tokens until we find one that ends with the expected sound?
    // Or just look at next token.

    let meaningBuffer = [];
    let matchedSound = "";
    let matched = false;

    // Greedy match: Find the LAST token in the window that matches the sound
    let bestK = -1;

    for (let k = 0; k < 4; k++) {
        if (tokenIdx + k >= hangulTokens.length) break;
        const token = hangulTokens[tokenIdx + k];
        // Standardize verification
        // If sound is '가', token '가' matches. '집가' matches. '불가' matches.
        if (token.endsWith(expectedSound)) {
            bestK = k;
        }
    }

    if (bestK !== -1) {
        // Use bestK
        let combinedTokens = [];
        for (let j = 0; j <= bestK; j++) {
            combinedTokens.push(hangulTokens[tokenIdx + j]);
        }

        let fullString = combinedTokens.join(' ');
        if (fullString.endsWith(expectedSound)) {
            let meaningPart = fullString.slice(0, -expectedSound.length).trim();
            // If meaning is empty, maybe the token WAS the meaning? (e.g. "각")
            // "각각 각" -> meaning "각각".
            // "각" -> meaning "".
            // If empty, restore original or mark as "뜻확인"?
            // Usually it means pure sound. But hanja list usually has meaning.
            // If it's a "sound only" line (unlikely), we get empty.
            if (meaningPart.length === 0 && fullString.length > expectedSound.length) {
                // partial logic? No.
            }
            if (meaningPart.length === 0) meaningPart = "뜻확인";

            results.push({
                id: i + 1,
                char: char,
                sound: expectedSound,
                meaning: meaningPart,
                level: '4급'
            });
        } else {
            // Should not happen if token ends with sound
            results.push({
                id: i + 1,
                char: char,
                sound: expectedSound,
                meaning: fullString,
                level: '4급'
            });
        }

        tokenIdx += bestK + 1;
        matched = true;
    }

    if (!matched) {
        // Could not match sound efficiently. 
        // Force consume 1 token?
        // Or maybe readings are messed up.
        // Log mismatch
        console.log(`Mismatch for ${char} (${expectedSound}). Next tokens: ${hangulTokens.slice(tokenIdx, tokenIdx + 3)}`);
        // We push a "Review Needed" item
        results.push({
            id: i + 1,
            char: char,
            sound: expectedSound,
            meaning: "뜻확인",
            level: '4급'
        });
        tokenIdx++; // Skip one token to avoid stuck buffer
    }
}

// Check duplicates? Or broken ones.
console.log(`Parsed ${results.length} items.`);

// Write to JSON
fs.writeFileSync('hanja_data_parsed.json', JSON.stringify(results, null, 2));
