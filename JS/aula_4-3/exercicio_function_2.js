let teste = [2, 3, 6, 7, 10, 1];

function indiceMaiorValor(array) {
    let maior = array[0];
    for (let i=0; i< array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return array.indexOf(maior);
}

console.log(indiceMaiorValor(teste));

