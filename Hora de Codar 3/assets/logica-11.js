/* 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses
valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos
deles estão fora deste intervalo. */

alert("Informe 10 números ao programa, e ele irá dizer quais números estão entre 24 e 42, e quais estão fora deles.");

var numero1 = parseInt(prompt("Informe o primeiro número:"));
var numero2 = parseInt(prompt("Informe o segundo número:"));
var numero3 = parseInt(prompt("Informe o terceiro número:"));
var numero4 = parseInt(prompt("Informe o quarto número:"));
var numero5 = parseInt(prompt("Informe o quinto número:"));
var numero6 = parseInt(prompt("Informe o sexto número:"));
var numero7 = parseInt(prompt("Informe o sétimo número:"));
var numero8 = parseInt(prompt("Informe o oitavo número:"));
var numero9 = parseInt(prompt("Informe o nono número:"));
var numero10 = parseInt(prompt("Informe o décimo número:"));

let dentro = [];
let fora = [];

if (numero1 >= 24 && numero1 <= 42){
    dentro.push(numero1)
} else if (numero1 < 24 || numero1 > 42){
    fora.push(numero1)
}

if (numero2 >= 24 && numero2 <= 42){
    dentro.push(numero2)
} else if (numero2 < 24 || numero2 > 42){
    fora.push(numero2)
}

if (numero3 >= 24 && numero3 <= 42){
    dentro.push(numero3)
} else if (numero3 < 24 || numero3 > 42){
    fora.push(numero3)
}

if (numero4 >= 24 && numero4 <= 42){
    dentro.push(numero4)
} else if (numero4 < 24 || numero4 > 42){
    fora.push(numero4)
}

if (numero5 >= 24 && numero5 <= 42){
    dentro.push(numero5)
} else if (numero5 < 24 || numero5 > 42){
    fora.push(numero5)
}

if (numero6 >= 24 && numero6 <= 42){
    dentro.push(numero6)
} else if (numero6 < 24 || numero6 > 42){
    fora.push(numero6)
}

if (numero7 >= 24 && numero7 <= 42){
    dentro.push(numero7)
} else if (numero7 < 24 || numero7 > 42){
    fora.push(numero7)
}

if (numero8 >= 24 && numero8 <= 42){
    dentro.push(numero8)
} else if (numero8 < 24 || numero8 > 42){
    fora.push(numero8)
}

if (numero9 >= 24 && numero9 <= 42){
    dentro.push(numero9)
} else if (numero9 < 24 || numero9 > 42){
    fora.push(numero9)
}

if (numero10 >= 24 && numero10 <= 42){
    dentro.push(numero10)
} else if (numero10 < 24 || numero10 > 42){
    fora.push(numero10)
}

document.write(`<b> Os números entre 24 e 42 são: </b> <br> ${dentro} <br> <b> Os números de fora são: </b> <br> ${fora} <br>`);