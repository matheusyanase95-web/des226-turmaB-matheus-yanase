let i = 1;

console.log('iniciando contagem na mesma linha...\n');

const intervalo = setInterval(() => {
    // Limpa a linha atual do terminal e move o cursor para o início da linha
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);

    // Escreve o número atual na mesma linha
    process.stdout.write(`Contando: ${i}`);

    if (i === 10) {
        clearInterval(intervalo); // Para o contador quando atingir 10
        console.log('\nContagem finalizada!');
    }

    i++;
}, 3000); // 3000 milissegundos = 3 segundos