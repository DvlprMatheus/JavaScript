/* 10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino)
de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas */

var altura = parseFloat(prompt("Por favor, informe sua altura:"))
var sexo = prompt("Por favor, informe seu sexo, masculino ou feminino?")
var masculino = "masculino"
var feminino = "feminino"
var calc = parseInt((72.7 * altura) - 58);
var calc2 = parseInt((62.1 * altura) - 44.7);

if (sexo === masculino) {
    alert("Seu peso ideal é: " + calc + " kg!");
} else if (sexo === feminino) {
    alert("Seu peso ideal é: " + calc2 + " kg!");
}