function maiorPalavra(palavra) {
    let array = palavra.split(' ');
    let maior = array[0];
    for (let i = 0; i<array.length; i+=1) {
        if (maior.length < array[i].length){
            maior = array[i];
        }  
    }  
    return maior; 
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));