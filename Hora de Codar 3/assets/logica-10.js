/* 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. */
alert("Este programa irá calcular a tabuada até o número que você informar:");

var inicio = 0;
var final = parseInt(prompt("Escolha um número:"));

var x1 = 1;
var x2 = 2;
var x3 = 3;
var x4 = 4;
var x5 = 5;
var x6 = 6;
var x7 = 7;
var x8 = 8;
var x9 = 9;
var x10 = 10;

while (inicio < final) {
    inicio++
    var resultado1 = (inicio * x1);
    var resultado2 = (inicio * x2);
    var resultado3 = (inicio * x3);
    var resultado4 = (inicio * x4);
    var resultado5 = (inicio * x5);
    var resultado6 = (inicio * x6);
    var resultado7 = (inicio * x7);
    var resultado8 = (inicio * x8);
    var resultado9 = (inicio * x9);
    var resultado10 = (inicio * x10);

    document.write(`${inicio} x 1 = ${resultado1} <br> ${inicio} x 2 = ${resultado2} <br> ${inicio} x 3 = ${resultado3} <br> ${inicio} x 4 = ${resultado4} <br> ${inicio} x 5 = ${resultado5} <br> ${inicio} x 6 = ${resultado6} <br> ${inicio} x 7 = ${resultado7} <br> ${inicio} x 8 = ${resultado8} <br> ${inicio} x 9 = ${resultado9} <br> ${inicio} x 10 = ${resultado10} <br> <hr>`);
}