const fs = require('fs');

const rawData = fs.readFileSync('hanja_data_parsed.json', 'utf8');
const data = JSON.parse(rawData);

// Filter valid items (char exists)
const validData = data.filter(item => item.char && item.char.trim().length > 0);

// Generate TS content
const tsContent = `export interface Hanja {
  id: number;
  char: string;
  sound: string;
  meaning: string;
  examples: { word: string; hanja: string }[];
  level: string;
}

export const hanjaList: Hanja[] = [
${validData.map((item, index) => {
    // Generate clean meaning
    let mean = item.meaning;
    if (mean === '??' || !mean) {
        mean = "뜻확인"; // Placeholder "Check Meaning"
    }

    // Generate placeholder examples
    // We don't have real examples from PDF. 
    // We can try to generate simple ones if we had a dictionary of words.
    // For now, empty array or generic?
    // User interface expects examples. Empty array might break UI? 
    // UI in Play.tsx: currentQ.hanja.examples.map...
    // If empty, map returns nothing. It handles it.

    return `  {
    id: ${index + 1},
    char: "${item.char}",
    sound: "${item.sound}",
    meaning: "${mean}",
    examples: [],
    level: "4급"
  }`;
}).join(',\n')}
];
`;

fs.writeFileSync('src/data/hanjaList.ts', tsContent);
console.log(`Generated hanjaList.ts with ${validData.length} items.`);
