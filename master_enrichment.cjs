const fs = require('fs');

const parsedDataPath = 'hanja_data_parsed.json';
const mainData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));

// Filter valid
const validData = mainData.filter(item => item.char && item.char.trim().length > 0);

// Load all example files
const exampleFiles = [
    'hanja_examples_1_100.json',
    'hanja_examples_101_200.json',
    'hanja_examples_201_300.json',
    'hanja_examples_301_500.json',
    'hanja_examples_501_700.json',
    'hanja_examples_701_850.json',
    'hanja_examples_851_990.json'
];

let allExamples = [];
exampleFiles.forEach(file => {
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        allExamples = allExamples.concat(data);
    }
});

// Manual Fixes Map (ID -> Object of changes)
const manualFixes = {
    10: { meaning: "뿔" },
    36: { meaning: "수레/차" },
    54: { meaning: "다툼/겨룰" }, // 競 Corrected
    55: { meaning: "볕/경치" },
    240: { meaning: "거느릴" } // 率
};

// Merge
validData.forEach((item, index) => {
    // Current ID = index + 1
    const exItem = allExamples.find(e => e.id === item.id);

    // Apply Examples & Meaning from JSON
    if (exItem) {
        item.examples = exItem.examples;
        if (exItem.meaning) {
            item.meaning = exItem.meaning;
        }
    } else {
        item.examples = item.examples || [];
    }

    // Apply Manual Fixes
    if (manualFixes[item.id]) {
        if (manualFixes[item.id].meaning) item.meaning = manualFixes[item.id].meaning;
        // Add other fields if needed
    }

    // Default meaning check
    if (item.meaning === '??' || !item.meaning) {
        item.meaning = "뜻확인";
    }
});

// Generate TS
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
    const exStr = JSON.stringify(item.examples || []);
    return `  {
    id: ${index + 1},
    char: "${item.char}",
    sound: "${item.sound}",
    meaning: "${item.meaning}",
    examples: ${exStr},
    level: "4급"
  }`;
}).join(',\n')}
];
`;

fs.writeFileSync('src/data/hanjaList.ts', tsContent);
console.log(`Updated hanjaList.ts with ${validData.length} items. Merged ${allExamples.length} enrichments.`);
