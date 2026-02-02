const hanjaDictionary = require('./node_modules/hanja/lib/data/hanjaeum.json');

const chars = ["家", "佳", "街", "充", "就", "合"];

chars.forEach(c => {
    console.log(`${c}: ${hanjaDictionary[c]}`);
});

console.log('Dict size:', Object.keys(hanjaDictionary).length);
