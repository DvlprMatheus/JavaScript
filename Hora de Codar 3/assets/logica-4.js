/* 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números
inteiros entre 15 e 100. */

alert("Calcule a média dos números inteiros entre 15 e 100");

var inicio = 14;
var final = 100;
var soma = 0;

while (inicio < final){
    inicio++;
    var soma = inicio + soma;
}

var media = soma/86;

alert(`O resultado da média é: ${media}`);