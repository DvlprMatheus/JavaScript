/* 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja
contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela
e no final da repetição escreva "EXPLOSÃO". */

alert("A bomba vai explodir em:");
var inicio = 31;
var final = 1;

while (inicio > final){
    inicio--;
    document.write (inicio + "<br>");
}

document.write("EXPLOSÃO!")