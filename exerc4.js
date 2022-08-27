const valor = Number(prompt("Digite o valor: "));

function substituaSePossivel(valor) {
    const array = [];
    for (var i = 1; i < valor + 1; i++) {
        if (i % 5 === 0 && i % 9 === 0) {
            array.push('LuidyMoura');
        } else if (i % 5 === 0) {
            array.push('Luidy');
        } else if (i % 9 === 0) {
            array.push('Moura');
        } else {
            array.push(i);
        }
    }

    return array;
}

 substituaSePossivel(valor);