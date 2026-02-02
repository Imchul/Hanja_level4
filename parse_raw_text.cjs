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

    // Look ahead up to 3 tokens?
    for (let k = 0; k < 4; k++) {
        if (tokenIdx + k >= hangulTokens.length) break;

        const token = hangulTokens[tokenIdx + k];
        const lastChar = token.slice(-1);

        // Check match
        // strict match: lastChar === expectedSound
        // What if expectedSound is different? (e.g. 렬 vs 열)
        // Initial sound rule apply?

        let isMatch = (lastChar === expectedSound);

        // Initial sound rule handling (heuristic)
        if (!isMatch) {
            // If expected '렬' but token ends '열'
            // If expected '녀' but token ends '여'
            // Simple mapping check?
            // Or verify using hanja.isHanja(char)? No.

            // Just trust the "End of token" logic if it's the 1st token?
            // But we might have "옳을" (ul) then "가" (ga).
            // "옳을" doesn't match "ga". "가" matches "ga".
        }

        if (isMatch) {
            // Found it!
            // Tokens from tokenIdx to tokenIdx+k are the definition.
            // e.g. k=0: "집가" (ends in 가). meaning="집"
            // e.g. k=1: "옳을" "가". meaning="옳을"

            matchedSound = lastChar;

            // Construct meaning
            // If match is single token "집가" -> Meaning "집".
            // If match is multiple "옳을" "가" -> Meaning "옳을".

            // Special case: Single char "가" -> matched sound "가". Meaning is from previous tokens.

            let combinedTokens = [];
            for (let j = 0; j <= k; j++) {
                combinedTokens.push(hangulTokens[tokenIdx + j]);
            }

            // Start processing combinedTokens to extract Meaning
            // "집가" -> "집"
            // "옳을", "가" -> "옳을"

            let fullString = combinedTokens.join(' ');
            if (fullString.endsWith(expectedSound)) {
                // Remove the sound from the end
                // "집가" -> "집"
                // "옳을 가" -> "옳을 "
                let meaningPart = fullString.slice(0, -1).trim();
                results.push({
                    id: i + 1,
                    char: char,
                    sound: expectedSound,
                    meaning: meaningPart,
                    level: '4급'
                });
            } else {
                // Should not happen if lastChar === expectedSound
                // Unless sound key length > 1? (Usually 1)
                results.push({
                    id: i + 1,
                    char: char,
                    sound: expectedSound,
                    meaning: fullString, // fallback
                    level: '4급'
                });
            }

            tokenIdx += k + 1;
            matched = true;
            break;
        }
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
            meaning: "??",
            level: '4급'
        });
    }
}

// Check duplicates? Or broken ones.
console.log(`Parsed ${results.length} items.`);

// Write to JSON
fs.writeFileSync('hanja_data_parsed.json', JSON.stringify(results, null, 2));
