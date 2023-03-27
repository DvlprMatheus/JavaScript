/* 11. Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
que só serão lidos os valores 1, 2, 3 ou 4 para as operações */

var primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
var segundo_numero = parseInt(prompt("Insira o segundo número:"));
var conta = parseInt(prompt("Escolha a operação digitando o número: 1. Soma, 2. Subtração, 3. Multiplicação, 4. Divisão"));
var adicao = parseFloat(primeiro_numero + segundo_numero);
var subtracao = parseFloat(primeiro_numero - segundo_numero);
var multiplicacao = parseFloat(primeiro_numero * segundo_numero);
var divisao = parseFloat(primeiro_numero / segundo_numero);

if (conta == 1){
    alert("A soma é: " + adicao)
}

if (conta == 2){
    alert("A diferença é: " + subtracao)
}

 if (conta == 3){
    alert("O produto é: " + multiplicacao)
}

if (conta == 4){
    alert("O resto é: " + divisao)
}