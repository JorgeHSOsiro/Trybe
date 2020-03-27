let custoProd = 10;
let valorVend = 15;


if ( custoProd > 0 && valorVend > 0) {    
    let lucro = (valorVend - (custoProd * 1.2)) * 1000; 
    console.log(lucro);
} else {
    console.log("Digite um valor de entrada valido");
}