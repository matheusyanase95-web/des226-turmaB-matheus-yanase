let entrada = require('prompt-sync')();

let usuario = 'joão';
let senha = '246810';
let saldo1= 500.00;

let usuario = 'joão';
let senha = '246810';
let saldo1= 500.00;

let usuario = 'joão';
let senha = '246810';
let saldo1= 500.00;

let usOk = false;
let snOk = false;
let acessoPermitido = false;

let num1 = parseInt(strNnum1);
let num2 = parseInt(strNnum2);

console.log('Insira seus dados para acessar o sistema!');

if (usuario.toLowerCase() === loginUsuario.toLowerCase()) {
    console.log('Nome de usuário verificado com sucesso!');
    usOk = true;
}

if (senha === loginSenha) {
    console.log('Senha verificada com sucesso!');
    snOk = true;
}

if (usOk === true) {
    if (snOk === true) {
        acessoPermitido = true;
    }
}

if (acessoPermitido === true) {
    console.log('Acesso permitido!');
} else {
    console.log('Acesso negado!');
}