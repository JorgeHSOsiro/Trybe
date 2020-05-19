const isAbove = require('./exercicio-11');

test('compara se um numero é maior que outro', () => {
    expect(isAbove(7, 2)).toBe(true);
    expect(isAbove(1, 2)).toBe(false);
});