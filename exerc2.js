const a = Number(prompt("Digite o primeiro termo da equação: "));
const b = Number(prompt("Digite o segundo termo da equação: "));
const c = Number(prompt("Digite o terceiro termo da equação: "));

function calculoBhaskara(a, b, c) {
    if (a === 0) {
        alert("Insira o valor de a");
        return;
    };
    const delta = (b*b) - (4*a*c);
    if (delta < 0) {
        return "Delta negativo";
    } else {
        let raizes = [];
        const raiz_delta = Math.sqrt(delta);
        const x1 = (-b + raiz_delta) / (2 * a);
        const x2 = (-b - raiz_delta) / (2 * a);
        raizes[0] = x1;
        raizes[1] = x2;
        return raizes;
    };
}

const raizes = calculoBhaskara(a, b, c);
console.log(raizes)