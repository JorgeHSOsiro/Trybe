const somaArray = (array) => {
    return new Promise((resolve ,reject) => {
        
        const newArray = array.map(element => Math.pow(element, 2));
        const somaElemento = newArray.reduce((acc, val) => (acc + val));
        if (somaElemento < 8000) {
           resolve('success');
        }
            reject(`error`);
    });
}
const numeros = [1, 14, 25, 45, 33, 11, 32, 5, 9, 50];

somaArray(numeros)
    .then(console.log)
    .catch(console.error);



