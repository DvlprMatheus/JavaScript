/* 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 
0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra
situação, ele receberá uma mensagem de "tente novamente" */

alert("Coloque a sua nota de quartro testes valendo dez, se sua média for 5 ou maior, você passa!");

var primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
var segundo_numero = parseInt(prompt("Insira o segundo número:"));
var terceiro_numero = parseInt(prompt("Insira o terceiro número:"));
var quarto_numero = parseInt(prompt("Insira o quarto número:"));
var media = 0;
var total = 0;

if (primeiro_numero > 0 & primeiro_numero < 11) {
    media = primeiro_numero + media;
}

if (segundo_numero > 0 & segundo_numero < 11) {
    media = segundo_numero + media;
}

if (terceiro_numero > 0 & terceiro_numero < 11) {
    media = terceiro_numero + media;
}

if (quarto_numero > 0 & quarto_numero < 11) {
    media = quarto_numero + media;
    total = media/4
}

if (total > 4.9) {
    alert("Você passou no teste!")
} else {
    alert("Tente novamente!")
}

document.write("Sua média é: " + total);