/* 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que
todos os números informados serão diferentes) */

let array = [];
var primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
var segundo_numero = parseInt(prompt("Insira o segundo número:"));
var terceiro_numero = parseInt(prompt("Insira o terceiro número:"));
var quarto_numero = parseInt(prompt("Insira o quarto número:"));

array.push(primeiro_numero);
array.push(segundo_numero);
array.push(terceiro_numero);
array.push(quarto_numero);

if (primeiro_numero > segundo_numero && primeiro_numero > terceiro_numero && primeiro_numero > quarto_numero) {
    alert(`O primeiro número é ${array[0]}, o último número é ${array[3]} e o maior número é ` + primeiro_numero);
} else if (segundo_numero > primeiro_numero && segundo_numero > terceiro_numero && segundo_numero > quarto_numero) {
    alert(`O primeiro número é ${array[0]}, o último número é ${array[3]} e o maior número é ` + segundo_numero)
} else if (terceiro_numero > primeiro_numero && terceiro_numero > segundo_numero && terceiro_numero > quarto_numero) {
    alert(`O primeiro número é ${array[0]}, o último número é ${array[3]} e o maior número é ` + terceiro_numero)
} else if (quarto_numero > primeiro_numero && quarto_numero > segundo_numero && quarto_numero > terceiro_numero) {
    alert(`O primeiro número é ${array[0]}, o último número é ${array[3]} e o maior número é ` + quarto_numero)
}