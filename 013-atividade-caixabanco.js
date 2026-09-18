let entrada = requiere('prompt-sinc')();

let usuario = 'joão';
let senha = '246810';
let strNnum1 = entrada('Insira o 1º valor: ');
let strNnum2 = entrada('Insira o 2º valor: ');

let num1 = parseInt(strNnum1);
let num2 = parseInt(strNnum2);

console.log('Insira seus dados para acessar o sistema!');

let loginUsuario = entrada('Nome de usuário: '); 
let loginSenha = entrada('Senha: ');

if (usuario == loginUsuario.toLowerCase() && senha == loginSenha) {
    console.log('Acesso permitido!');           
} else {
    console.log('Acesso negado!');
}

entrada('Pressione enter para finalizar o programa!');