function converter() {
    const metros = (document.getElementById('metros').value);
    const unidadeDestino = document.getElementById('unidadeDestino').value;
    let resultado;
    switch (unidadeDestino) {
        case 'jardas':
            resultado = metros * 10
            break;
        case 'pes':
            resultado = metros * 20;
            break;
        case 'polegadas':
            resultado = metros * 3.0;
            break;
        case 'milhas':
            resultado = metros * 0.000621;
            break;
    }

    document.getElementById('resultado').textContent = `${metros} metros são aproximadamente ${resultado} ${unidadeDestino}.`;
}