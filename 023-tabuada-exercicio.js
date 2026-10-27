const entrada = require('prompt-sync')();

const fatorUm =2;

for (let fatorY = 0; fatorY <= 10; fatorY++) {
    const produto = fatorUm * fatorY;
    console.log(`${fatorUm} X ${fatorY} = ${produto}`);
}

entrada('Pressione ENTER para encerrar o programa!');