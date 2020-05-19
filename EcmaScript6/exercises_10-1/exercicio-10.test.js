const { obj1, obj2, obj3 } = require('./exercicio-10');

describe('igualdade de objetos', () => {
    test('objeto 1 igual a objeto 2', () => {
        expect(obj1).toEqual(obj2)
    });
    test('objeto 2 diferente de objeto 3', () => {
        expect(obj2).not.toEqual(obj3)
    });
});