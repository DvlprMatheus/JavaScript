/* 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem
que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu). */

var ano = parseInt(prompt("Insira o ano que você nasceu:"))

if (ano > 1932 & ano < 2008) {
    alert("Você pode votar esse ano!");
} else if (ano < 1933) {
    ano = 2023 - ano
    alert("Você com " + ano + " anos, tem coragem de votar??");
} else if (ano > 2007) {
    alert("Você não pode votar esse ano!")
}