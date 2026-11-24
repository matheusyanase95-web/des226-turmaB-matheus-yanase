const entrada = require('prompt-sync')();

const nInicia = number(entrada('Digite um número inicial da tabuada que você quer ver: '));
const nFinal = Number(entrada('Digite o numero final da tabuada que você quer ver: '));

for (let contador = nInicia; contador <= nFinal; contador++) {
console.log('Tabuada do ${contador}'); 
for (let i = 1; i <= 10; i++) {
    console.log('Tabuada do ${contadorl}');
    const resultado = nInicial * i; 
    console.log('${contador} X ${i} = ${resultado}'); 
    }
    console.log(' ');
}

console.log(' ');
entrada('Pressione ENTER para encerrar o programa!');