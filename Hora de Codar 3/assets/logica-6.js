/* 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média
final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular
a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o
programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a
quantidade de alunos aprovados. */

alert("Este programa irá calcular a média dos alunos e dizer se foi aprovado ou não!");

function aluno (){
    let nota1 = parseFloat(prompt("Insira sua primeira nota:"));
    let nota2 = parseFloat(prompt("Insira sua segunda nota:"));
    let media = (nota1 + nota2)/2;

    if (media >= 9.5) {
        document.write(`A média do aluno é ${media} e ele foi <b>APROVADO</b>! <br>`);
    } else {
        document.write(`A média do aluno é ${media} e ele foi <b>REPROVADO</b>! <br>`);
    }

    nova_pesquisa();
}

function nova_pesquisa (){
    let consulta = prompt("Calcular a média de outro aluno S/N?");
    let confirmar = "S";
    let cancelar = "N";
    if (consulta === confirmar) {
        aluno()
    } else if (consulta === cancelar) {
        alert("Confira os resultados:");
    }
}

aluno ();