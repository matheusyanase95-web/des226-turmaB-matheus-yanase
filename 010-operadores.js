let entrada = require('prompt-sync')();

// vamos calcular
let strNnum1 = entrada('Insira o 1º valor: ');
let strNnum2 = entrada('Insira o 2º valor: ');

let num1 = parseInt(strNnum1);
let num2 = parseInt(strNnum2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let inteirodivisao = parseInt(num1 / num2);
let restoDivisao = num1 % num2;

console.log(`Soma: ${num1} + ${num2} = ${soma}`);
console.log(`Subtracao: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicacao: ${num1} * ${num2} = ${multiplicacao}`);
console.log(`Divisao: ${num1} / ${num2} = ${divisao.toFixed(2)}`);
console.log(`Inteiro da Divisao: ${num1} / ${num2} = ${inteirodivisao}`);
console.log(`Resto Divisao: ${num1} % ${num2} sobra: ${restoDivisao}`);