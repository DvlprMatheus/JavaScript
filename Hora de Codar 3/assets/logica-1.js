/* Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo
valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja,
para o segundo valor não pode ser aceito o valor zero, nem um valor negativo. O seu
programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor. */

var primeiro_numero = prompt("Insira um primeiro valor:");
var segundo_numero = prompt("Insira um segundo valor:");

if (segundo_numero <= 0) {
    var segundo_numero = prompt("Tente novamente, insira um valor maior que zero:");
}

var div = (primeiro_numero/segundo_numero);

alert(div);