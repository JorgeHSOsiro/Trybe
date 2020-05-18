const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.equal(isAbove(7,2), true)
assert.equal(isAbove(1,2), false)