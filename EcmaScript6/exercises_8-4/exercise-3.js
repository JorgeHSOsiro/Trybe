const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
    const addAllnumbers = (arg) => {
        let result = 0;
        for ( i in arg ) {
            result = result + arg[i];
        }
        return result;
    }
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
