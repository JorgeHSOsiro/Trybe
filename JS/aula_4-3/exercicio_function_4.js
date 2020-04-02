let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorString(array) {
    let maior = array[0];
    for (let i=0; i < array.length; i++){
        if(array[i].length > maior.length){
            maior = array[i];
        }
    }
    return maior;
}

console.log(maiorString(teste));
