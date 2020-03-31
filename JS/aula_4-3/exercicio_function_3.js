let teste = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(array) {
    let menor = array[0];
    for (let i=0; i< array.length; i++){
        if(array[i] < menor){
            menor = array[i];
        }
    }
    return array.indexOf(menor);
}

console.log(indiceMenorValor(teste));