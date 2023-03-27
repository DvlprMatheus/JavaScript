/* 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números
inteiros informados pelo usuário e todos os números inteiros entre eles. Considere
que o primeiro sempre será menor que o segundo. */

alert("Você informará dois números, e nós iremos calcular a média dos números inteiros entre eles.");

var inicio = parseInt(prompt("Informe o primeiro número:"));
var final = parseInt(prompt("Informe o segundo número:"));

var soma = 0 + inicio;
let diferença = 1 + inicio - final;

if(inicio < final){
    alert("Tente novamente, o primeiro número tem que ser maior que o segundo.");
} else { 
    while (inicio > final){
    inicio--;
    var soma = inicio + soma;
}

var media = soma/diferença;

alert(`O resultado da média é: ${media}`);
}