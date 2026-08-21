let entrada = require("prompt-sync")();
// comentario de 1 linha
let nome = "Matheus"; // string ex: "qualquer texto"
let idade = "30"; // nunber ex: 10, 18.23
let trabalha = true; // false -- comentario de 1 linha
let endereço = {
  rua: "brasil",
  num: 40,
  bairro: "centro",
}; // object ex: padrão chave/valor
let funcao = () => console.log("oi"); // function ex: bloco de código

/*
comentario
de mais de
uma linha
*/

//Exibindo tipos de variáveis
console.log("tipos de variaáveis");
console.log("Variável: nome: " + typeof nome);
console.log("Variável: idade: " + typeof idade);
console.log("Variável: trabalha: " + typeof trabalha);
console.log("Variável: endereço: " + typeof endereço);
console.log("Variável: rua: " + typeof rua);
console.log("Variável: funcao: " + typeof funcao);

// variáveis definidas sem valor
let nomeDigitado;
let idadeDigitado;
let trabalhaDigitado;

console.log(); // Pula uma linha

// passando valor para variáveis
nomeDigitado = entrada("Digite seu nome:");
idadeDigitado = entrada("Qual sua idade?:");
trabalhaDigitado = entrada("você trabalha?:");

// Mostrando valor e tipo das variáveis
console.log("nome:" + nomeDigitado + " - tipo " + typeof nomeDigitado);
console.log("nome:" + idadeDigitado + " - tipo " + typeof idadeDigitado);
console.log("nome:" + trabalhaDigitado + " - tipo " + typeof trabalhaDigitado);
