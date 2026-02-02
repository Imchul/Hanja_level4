const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('Hanja_level4.pdf');

// Standard v1.1.1 usage: pdf(buffer).then(data => ...)
pdf(dataBuffer).then(function (data) {
    console.log(`Total Pages: ${data.numpages}`);
    console.log(`Info: ${JSON.stringify(data.info)}`);
    console.log('--- TEXT START ---');
    console.log(data.text.substring(0, 3000));
    console.log('--- TEXT END ---');
    fs.writeFileSync('raw_hanja_full.txt', data.text);
}).catch(err => {
    console.error('Error:', err);
});
