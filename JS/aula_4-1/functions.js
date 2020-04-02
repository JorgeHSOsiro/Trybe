function calculaSoma(a, b) {
    let resultado = a + b;
    return resultado;
}

function calculaSubtracao(a, b) {
    let resultado = a - b;
    return resultado;
}

function calculaMultiplicacao(a, b) {
    let resultado = a * b;
    return resultado;
}

function calculaDivisao(a, b) {
    let resultado = a / b;
    return resultado;
}

function calculaModulo(a, b) {
    let resultado = a % b;
    return resultado;
}

function comparaMaiorEntreDois(a, b) {
    if (a > b) {
        return "o numero " + a + " é maior que " + b;
    }else{
        return "o numero " + a + " é menor que " + b;
    }
}

function comparaMaiorEntreTres(a, b, c) {
    if (a > b && a > c) {
        return "O numero maior é: " + a;
    }else if (b > a && b > c){
        return "O numero maior é: " + b;
    }else if(c > a && c > b){
        return "O numero maior é: " + c;
    }else{
        return "não é possivel identificar";
    }
}

function comparaPositivoNegativo(a) { 
    if (a > 0) {
        return "o numero " + a + " é positivo";
    }else if( a < 0){
        return "o numero " + a + " é negativo";
    }else if( a == 0){
        return "o numero é  0";
    }else {
        return a + " não é numero"
    }
}

function calculaImposto(salarioBruto) {
    if ( salarioBruto <= 1556.94) {
        inss = salarioBruto * 0.08;
    } else if ( salarioBruto <= 2594.92 && salarioBruto >= 1556.95) {
        inss = salarioBruto * 0.09;
    } else if ( salarioBruto <= 5189.82 && salarioBruto >= 2594.92) {
        inss = salarioBruto * 0.11;
    } else if ( salarioBruto >= 5189.82) {
        inss = 570.88;
    }
    
    let salarioBase = salarioBruto - inss;
    
    let ir = null;
    if ( salarioBase <= 1903.98) {
        ir = 0;
    } else if ( salarioBase<= 2826.65 && salarioBase >= 1903.99) {
        ir = (salarioBase * 0.075) - 142.80;
    } else if ( salarioBase <=  3751.05 && salarioBase >= 2826.66) {
        ir = salarioBase * 0.15 - 354.80;
    } else if ( salarioBase <=  4.664,68 && salarioBase >= 3.751,06) {
        ir = salarioBase * 0.225 - 636.13;
    } else if ( salarioBase >= 4.664,68) {
        ir = salarioBase * 0.275 - 869.36;
    }
    
    let salarioLiq = salarioBase - ir;
    
    return salarioLiq;
}

function calculaLucro(custoProduto, valorVenda) {
    
    if ( custoProduto > 0 && valorVenda > 0) { 
        let lucro = (valorVenda - (custoProduto * 1.2)) * 1000;       
        return lucro;
    } else {
        return "Digite um valor de entrada valido";
    }
}

function verificaTriangulo(a, b, c) {
    let soma = a + b +c;
    if (soma == 180) {
        return true;
    }else{
        return false;
    }
}

console.log(verificaTriangulo(90, 80, 30));