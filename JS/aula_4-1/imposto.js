let salarioBruto = 3000;
let inss = null;
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

console.log(salarioLiq);