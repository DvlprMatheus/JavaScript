/* 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem 
ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou. */

var primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
var segundo_numero = parseInt(prompt("Insira o segundo número:"));
var terceiro_numero = parseInt(prompt("Insira o terceiro número:"));
var quarto_numero = parseInt(prompt("Insira o quarto número:"));
var quinto_numero = parseInt(prompt("Insira o quinto número:"));
var sexto_numero = parseInt(prompt("Insira o sexto número:"));
var soma = 0;

if (primeiro_numero < 72) {
    soma = primeiro_numero + soma;
}

if (segundo_numero < 72) {
    soma = segundo_numero + soma;
}

if (terceiro_numero < 72) {
    soma = terceiro_numero + soma;
}

if (quarto_numero < 72) {
    soma = quarto_numero + soma;
}

if (quinto_numero < 72) {
    soma = quinto_numero + soma;
}

if (sexto_numero < 72) {
    soma = sexto_numero + soma;
}

// Resultados
document.write("Os resultados são: <br> • Primeiro: " + primeiro_numero + "<br> • Segundo: " + segundo_numero + "<br> • Terceiro: " + terceiro_numero + "<br> • Quarto: " + quarto_numero + "<br> • Quinto: " + quinto_numero + "<br> • Sexto: " + sexto_numero + "<br> • Total: " + soma);