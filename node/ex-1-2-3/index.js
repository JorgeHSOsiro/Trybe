const readline = require('readline-sync');
const inquirer = require('inquirer');

//example how to use readline-sync
function askName() {
    let userName = readline.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}

// ex1
function calculaIMC() {
    let nome = readline.question("Qual seu nome?")
    let peso = readline.questionFloat("Informe seu peso:");
    let altura = readline.questionFloat("Informe sua altura:");
    let imc = (peso/(altura*altura)).toFixed(2);
    console.log(`${nome}, voce tem um imc de ${imc}.`);
}
// calculaIMC();

// ex2 
function informaSituacao() {
    let nome = readline.question("Qual seu nome?")
    let peso = readline.questionFloat("Informe seu peso:");
    let altura = readline.questionFloat("Informe sua altura:");
    let imc = (peso/(altura*altura)).toFixed(2);
    if(imc< 18.5) {
        console.log(`${nome}, voce tem um imc de ${imc} e esta abaixo do peso.`);
    }
    if(imc >= 18.5 && imc <= 24.9) {
        console.log(`${nome}, voce tem um imc de ${imc} e seu peso esta normal.`);
    }
    if(imc >= 25 && imc <= 29.9) {
        console.log(`${nome}, voce tem um imc de ${imc} e esta acima do peso.`);
    }
    if(imc >= 30 && imc <= 34.9) {
        console.log(`${nome}, voce tem um imc de ${imc} e esta em obesidade de grau I.`);
    }
    if(imc >= 30.5 && imc <= 39.9) {
        console.log(`${nome}, voce tem um imc de ${imc} e esta em obesidade de grau II.`);
    }
    if(imc >= 40.0) {
        console.log(`${nome}, voce tem um imc de ${imc} e esta em obesidade de grau III.`);
    }
}

informaSituacao()
