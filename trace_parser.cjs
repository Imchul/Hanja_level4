const fs = require('fs');
const hanjaDictionary = require('./node_modules/hanja/lib/data/hanjaeum.json');
const rawText = fs.readFileSync('raw_hanja_full.txt', 'utf8');

const lines = rawText.split('\n');
let cleanLines = lines.filter(line => {
    if (line.includes('4급')) return false;
    if (line.includes('4合')) return false;
    if (line.trim().length === 0) return false;
    return true;
});

const allHanjaRegex = /[\u4e00-\u9fa5]/g;
const allHangulRegex = /[가-힣]+/g;

let hanjaList = [];
let hangulTokens = [];

cleanLines.forEach(line => {
    const hanjas = line.match(allHanjaRegex);
    const hanguls = line.match(allHangulRegex);

    if (hanjas && (!hanguls || hanguls.length < hanjas.length)) {
        hanjaList.push(...hanjas);
    } else if (hanguls) {
        const filteredHanguls = hanguls.filter(h => !['연습문제', '페이지'].includes(h));
        hangulTokens.push(...filteredHanguls);
    } else if (hanjas) {
        hanjaList.push(...hanjas);
    }
});

let tokenIdx = 0;

for (let i = 0; i < hanjaList.length; i++) {
    const char = hanjaList[i];

    // Only trace specific range
    const doTrace = (i >= 50 && i <= 60);

    let expectedSound = "";
    if (hanjaDictionary[char]) {
        expectedSound = hanjaDictionary[char];
    }

    if (doTrace) {
        console.log(`[${i + 1}] Char: ${char}, Sound: ${expectedSound}`);
        console.log(`Current Token Buffer: ${hangulTokens.slice(tokenIdx, tokenIdx + 5).join(", ")}`);
    }

    let matched = false;
    let matchMeaning = "";

    for (let k = 0; k < 4; k++) {
        if (tokenIdx + k >= hangulTokens.length) break;

        const token = hangulTokens[tokenIdx + k];
        const lastChar = token.slice(-1);

        // Check match
        // NOTE: Does "별경" end with "경"? Yes.
        // Does "경" end with "경"? Yes.
        let isMatch = (lastChar === expectedSound);

        if (isMatch) {
            let combinedTokens = [];
            for (let j = 0; j <= k; j++) {
                combinedTokens.push(hangulTokens[tokenIdx + j]);
            }

            let fullString = combinedTokens.join(' ');
            if (fullString.endsWith(expectedSound)) {
                matchMeaning = fullString.slice(0, -1).trim();
            } else {
                matchMeaning = fullString;
            }

            if (doTrace) console.log(`   MATCH at k=${k}. Tokens used: ${combinedTokens.join(", ")}. Meaning: ${matchMeaning}`);

            tokenIdx += k + 1;
            matched = true;
            break;
        }
    }

    if (!matched) {
        if (doTrace) console.log(`   NO MATCH. Skipping 1 token.`);
        tokenIdx++;
    }
}
