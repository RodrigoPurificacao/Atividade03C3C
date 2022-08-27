// Variável que vai guardar o tipo do triângulo
let triangulo;

// Ler os lados do triângulo
const lado_a = Number(prompt("Digite o primeiro lado do triângulo: "));
const lado_b = Number(prompt("Digite o segundo lado do triângulo: "));
const lado_c = Number(prompt("Digite o terceiro lado do triângulo: "));

// Caso sejam todos lados iguais
if (lado_a === lado_b && lado_a === lado_c && lado_b === lado_c) {
    triangulo = 'Equilatero';
} else if (lado_a !== lado_b && lado_a !== lado_c && lado_b !== lado_c) {
    // Caso sejam todos lados diferentes
    triangulo = 'Escaleno';
} else {
    // Caso tenham apenas 2 lados iguais
    triangulo = 'Isósceles';
}

console.log("O triângulo é: ", triangulo);