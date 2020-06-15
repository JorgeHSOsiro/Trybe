const thereIs = require('./exercicio-7');

test('testar se o elemento foi definido', () => {
    expect(typeof(thereIs)).toBe('string');
    expect(thereIs).not.toBe(null);
});