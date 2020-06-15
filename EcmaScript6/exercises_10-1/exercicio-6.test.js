const myFizzBuzz = require('./exercicio-6');

describe('testar retorno de multiplos de 3, 5 e ambos', () => {
    test('testar multiplos de 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('testar multiplos de 3', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    test('testar multiplos de 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    test('retorna o argumneto se não for multiplo de 3 ou 5', () => {
        expect(myFizzBuzz(13)).toBe(13);
    });
    test('se não for do tipo Number retorna false', () => {
        expect(myFizzBuzz('string')).toBe(false);
    });
});