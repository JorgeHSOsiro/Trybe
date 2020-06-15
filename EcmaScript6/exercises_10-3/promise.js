const somaArray = (array) => {
    return new Promise((resolve ,reject) => {
        const newArray = array.map(element => Math.pow(element, 2));
        const somaElemento = newArray.reduce((acc, val) => (acc + val));
        if (somaElemento < 8000) {
            resolve(somaElemento);
        }
            reject(`“É mais de oito mil! Essa promise deve estar quebrada!”`);
    });
}
const numeros = [1, 14, 25, 45, 33, 11, 32, 5, 9, 50];
const division = total => {
    let arr = [2, 3, 5, 10];
    return arr.map(num => total / num);
}

const sumDivision = sum => {
    const result = sum.reduce((total, num) => total + num);
    console.log(result.toFixed(2));
}
somaArray(numeros)
    .then(division())
    .catch(console.error);



