const sum = require('./exercicio-1');

describe('sum', () =>{
    test('arguments must be numbers', () => {
        expect(() => { sum('string', 4) }).toThrow('Parameters must be numbers');
    });

    test('soma de dois numeros', () =>{
        
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
})

// assert.equal(sum(4,5), 9);
// assert.equal(sum(0, 0), 0);
// assert.throws(() => { sum(4,"5"); }, "/^Error: Parameters must be numbers/");