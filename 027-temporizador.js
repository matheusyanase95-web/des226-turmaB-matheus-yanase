const temporizador = require('prompt-sync')();

let i = 1;

console.log('Iniciando contagem na mesma linha: ');

const intervalo = setInterval(() => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    
    process.stdout.write(`Tempo decorrido: ${i} segundos`);

    if (i === 15) {
        clearInterval(intervalo); // Para o contador quando chega em 10 segundos
        console.log('\n\n Tempo limite de 15 segundos atingido.');
        entrada('Pressione ENTER para encerrar!');
    }

    i++;
}, 1000); // 1000 milissegundos = 1 segundo