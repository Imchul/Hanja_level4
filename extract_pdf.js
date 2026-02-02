import fs from 'fs';
import pdf from 'pdf-parse';

const dataBuffer = fs.readFileSync('Hanja_level4.pdf');

pdf(dataBuffer).then(function (data) {
    // console.log(data.text);
    // Write first 2000 chars to check format
    console.log(data.text.substring(0, 2000));
    // Also save all to a file to be safe
    fs.writeFileSync('raw_hanja_full.txt', data.text);
}).catch(err => {
    console.error(err);
});
