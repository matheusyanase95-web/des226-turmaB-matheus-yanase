let entrada = require('prompt-sync')();

let strNnum1 = entrada('idade 16, acompanhado de um responsável legal, ou idade 18 anos ou mais: acesso negado!');
let strNnum2 = entrada('idade 16, acompanhado de um responsável legal, ou idade 18 anos ou mais: acesso permitido!');
let strNnum3 = entrada('idade 25, acompanhado de um responsável legal, ou idade 18 anos ou mais: acesso bloqueado!');

let strNnum1 = entrada('Insira o 1º valor: ');
let strNnum2 = entrada('Insira o 2º valor: ');
let strNnum3 = entrada('Insira o 3º valor: ');

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;

console.log(`Soma: ${num1} + ${num2} = ${soma}`);
console.log(`Subtracao: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicacao: ${num1} * ${num2} = ${multiplicacao}`);