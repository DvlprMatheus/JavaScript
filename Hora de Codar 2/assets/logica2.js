/* 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero. */

var positivos = 1
var negativos = -1
var zero = 0
var numero = parseInt(prompt("Insira o um número:"));

if (numero > positivos || numero == positivos) {
    alert("O número " + numero + " é positivo");
} else if (numero < negativos || numero == negativos) {
    alert("O número " + numero + " é negativo");
} else if (numero == zero){
    alert("O número é ZERO");
}