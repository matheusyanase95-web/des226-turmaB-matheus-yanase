
let objeto = {}; // objeto vazio

let pessoa = {
    nome: 'Matheus',
    profissao: 'Desenvolvedor',
    idade: 31,
    trabalha: true,
} // objeto com atributos

let funcionario = {
    nome: 'alerrandro',
    cargo: 'Coordenadora',
    salario: 5021.32,
    endereco: {
        rua: 'Brasil',
        numero: 10,
        bairro: 'Centro',
        cidade: 'Tupã'
    }
}


console.log('Tipo variavel objeto vazio: ${typeof (objeto)}');
console.log('Tipo variavel pessoa: ${typeof (pessoa)}');
console.log('pessoa'); // visualizar objeto armazenado
console.log('Nome da pessoa cadastrada: ${pessoa.nome}'); // vizualizar atributo objeto
console.log('Cidade do funcionario: ${funcionario.endereco.cidade}');
