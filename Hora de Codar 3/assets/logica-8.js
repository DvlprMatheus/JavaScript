/* 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e 
N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado
pelo usuário. */

function algoritmo (){
    let inicio = 0;
    var final = parseInt(prompt("Escolha um número:"));

    if (final <= 0) {
        var final = parseInt(prompt("ERRO! Escolha um número (maior que 0):"));
        while (inicio < final) {
            inicio++;
            document.write(inicio + "<br>");
        }
    } else {
        while (inicio < final) {
            inicio++;
            document.write(inicio + "<br>");
        }
    }
}

algoritmo();