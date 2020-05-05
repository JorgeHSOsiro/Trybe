const assert = require('assert');

const sum = (a,b) => {
    if (typeof(a) === 'String'|| typeof(b) === 'String') throw new Error("Parameters must be numbers");
    return a+b;
}


assert.equal(sum(4,5), 9);
assert.equal(sum(0, 0), 0);
assert.throws(() => { sum(4,"5"); }, "/^Error: Parameters must be numbers/");

