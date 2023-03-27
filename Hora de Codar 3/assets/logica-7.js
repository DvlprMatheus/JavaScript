/* 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e
imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante
a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para
qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo
valor ao usuário */
alert("O programa irá calcular sua média das suas 6 provas.");

    // Primeira Nota
    var nota1 = parseFloat(prompt("Qual sua primeira nota?"));

    if (nota1 < 0 || nota1 > 10){
    var nota1 = parseFloat(prompt("ERRO! Informe a nota corretamente, entre 0 e 10:"));
    }

    // Segunda Nota
    var nota2 = parseFloat(prompt("Qual sua segunda nota?"));

    if (nota2 < 0 || nota2 > 10){
    var nota2 = parseFloat(prompt("ERRO! Informe a nota corretamente, entre 0 e 10:"));
    }

    // Terceira Nota
    var nota3 = parseFloat(prompt("Qual sua terceira nota?"));

    if (nota3 < 0 || nota3 > 10){
    var nota3 = parseFloat(prompt("ERRO! Informe a nota corretamente, entre 0 e 10:"));
    }

    // Quarta Nota
    var nota4 = parseFloat(prompt("Qual sua quarta nota?"));

    if (nota4 < 0 || nota4 > 10){
    var nota4 = parseFloat(prompt("ERRO! Informe a nota corretamente, entre 0 e 10:"));
    }

    // Quinta Nota
    var nota5 = parseFloat(prompt("Qual sua quinta nota?"));

    if (nota5 < 0 || nota5 > 10){
    var nota5 = parseFloat(prompt("ERRO! Informe a nota corretamente, entre 0 e 10:"));
    }

    // Sexta Nota
    var nota6 = parseFloat(prompt("Qual sua sexta nota?"));

    if (nota6 < 0 || nota6 > 10){
    var nota6 = parseFloat(prompt("ERRO! Informe a nota corretamente, entre 0 e 10:"));
    }

    // Media
    
    function media (){
    var calcular = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6)/6
    document.write (`A sua média é: ${calcular}`);
    }

media();