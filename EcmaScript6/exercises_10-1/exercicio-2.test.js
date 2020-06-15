const myIndexOf = require('./exercicio-2');

test('indice esperado', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});
