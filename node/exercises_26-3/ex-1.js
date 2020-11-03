const fs = require('fs');

const arquivo = 'text1.txt';
const arquivo2 = 'text2.txt';

function syncRead(arch) {
    const one = fs.readFileSync(arch);
    // fs.readFileSync(arquivo2);
    console.log(one);
}

syncRead(arquivo);