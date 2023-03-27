/* Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas
áreas. O usuário irá informar os valores de cada variável. */

alert("Agora iremos calcular áreas de formas geométricas:");

//Retângulo
var base_ret = parseFloat(prompt("Insira a base do retângulo:"));
var altura_ret = parseFloat(prompt("Insira a altura do retângulo:"));
var resultado1 = parseFloat(base_ret * altura_ret);

alert("O resultado da área do retângulo é: " + resultado1);

//Quadrado
var lado_quad = parseFloat(prompt("Insira o lado do quadrado:"));
var resultado2 = parseFloat(lado_quad * lado_quad);

alert("O resultado da área do quadrado é: " + resultado2);

//Losango
var diagonal_max_los = parseFloat(prompt("Insira a diagonal maior do losango:"));
var diagonal_min_los = parseFloat(prompt("Insira a diagonal menor do losango:"));
var resultado3 = parseFloat((diagonal_max_los * diagonal_min_los)/2);

alert("O resultado da área do losango é: " + resultado3);

//Trapézio
var base_max_trap = parseFloat(prompt("Insira a base maior do trapézio:"));
var base_min_trap = parseFloat(prompt("Insira a base menor do trapézio:"));
var altura_trap = parseFloat(prompt("Insira a altura do trapézio:"));
var resultado4 = parseFloat(((base_max_trap + base_min_trap) * altura_trap))/2;

alert("O resultado da área do trapézio é: " + resultado4);

//Paralelogramo
var base_parl = parseFloat(prompt("Insira a base do paralelogramo:"));
var altura_parl = parseFloat(prompt("Insira a altura do paralelogramo:"));
var resultado5 = parseFloat(base_parl * altura_parl);

alert("O resultado da área do parlelogramo é: " + resultado5);

//Triângulo
var base_trg = parseFloat(prompt("Insira a base do triângulo:"));
var altura_trg = parseFloat(prompt("Insira a altura do triângulo:"))
var resultado6 = parseFloat((base_trg * altura_trg)/2);

alert("O resultado da área do triângulo é: " + resultado6);

//Círculo
var raio_circ = parseFloat(prompt("Insira o raio do círculo:"))
var pi = parseFloat(3,14);
var resultado7 = parseFloat(pi * (raio_circ * raio_circ));

alert("O resultado da área do círculo é " + resultado7);

//Resultado Final
document.write("O resultado de cada área: <br> • Retângulo: " + resultado1 + "<br> • Quadrado: " + resultado2 + "<br> • Losango: " + resultado3 + "<br> • Trapézio: " + resultado4 + "<br> • Paralelogramo: " + resultado5 + "<br> • Triângulo: " + resultado6 + "<br> • Círculo: " + resultado7)
