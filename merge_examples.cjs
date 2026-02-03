const fs = require('fs');

const tsFilePath = 'src/data/hanjaList.ts';
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

const examplesData = require('./hanja_examples_101_200.json');

// Parse TS content crudely (regex or string replacement)
// Or better: Re-generate TS from the previous JSON + Example JSON

const parsedDataPath = 'hanja_data_parsed.json'; // The source with 990 items
const mainData = JSON.parse(fs.readFileSync(parsedDataPath, 'utf8'));

// Filter valid
const validData = mainData.filter(item => item.char && item.char.trim().length > 0);

// Merge examples
validData.forEach((item, index) => {
  // Current ID = index + 1
  const exItem = examplesData.find(e => e.id === item.id);
  if (exItem) {
    item.examples = exItem.examples;
  } else {
    item.examples = []; // Default empty
  }
});

// Re-generate TS
const newTsContent = `export interface Hanja {
  id: number;
  char: string;
  sound: string;
  meaning: string;
  examples: { word: string; hanja: string }[];
  level: string;
}

export const hanjaList: Hanja[] = [
${validData.map((item, index) => {
  let mean = item.meaning;
  if (mean === '??' || !mean) mean = "뜻확인";

  // Format examples
  const exStr = JSON.stringify(item.examples || []);

  return `  {
    id: ${index + 1},
    char: "${item.char}",
    sound: "${item.sound}",
    meaning: "${mean}",
    examples: ${exStr},
    level: "4급"
  }`;
}).join(',\n')}
];
`;

fs.writeFileSync(tsFilePath, newTsContent);
console.log('Updated hanjaList.ts with examples for first 100 items.');
