let nota1 = 7,5;
let nota2 = 4,0;
let nota3 = 8,0;

let media = (nota1 + nota2 + nota3) / 3;

console.log("media:", media.toFixed(2));

if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log("Nota inválida! As notas devem estar entre 0 e 10.");
} else {
    if (media >= 7) {
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno reprovado!");
    }
}