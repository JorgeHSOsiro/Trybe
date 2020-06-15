const mySum = require('./exercicio-3');

test('soma de array', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
    expect(mySum([1, -2, -3, 4])).toBe(0);
});