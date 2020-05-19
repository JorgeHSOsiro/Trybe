const myRemove = require('./exercicio-4');


describe('remover elemento de um array', () => {
    test('remover elemento existente de um array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ]);
    });
    test('remover elemento inexistente de um array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ]);
    })
})
