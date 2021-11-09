const lista = document.querySelector('.operaciones');
const visor = document.querySelector('.monitor');

lista.addEventListener('click', (e) => {

    let valor1 = parseInt(document.querySelector('#primero').value);
    let valor2 = parseInt(document.querySelector('#segundo').value);

    if (e.target && e.target.tagName === 'IMG') {
        if (e.target.id == 'sumar') {
            visor.innerHTML = valor1 + valor2;
            // console.log();
        }
        if (e.target.id == 'restar') {
            visor.innerHTML = valor1 - valor2;
            // console.log(valor1 - valor2);
        }
        if (e.target.id == 'multiplicar') {
            visor.innerHTML = valor1 * valor2;
            // console.log(valor1 * valor2);
        }
        if (e.target.id == 'dividir') {
            visor.innerHTML = valor1 / valor2;
            // console.log(valor1 / valor2);
        }
    }
})

function sumar(a, b) {
    console.log(a + b);
}

function restar(a, b) {
    console.log(a - b);
}

function multiplicar(a, b) {
    console.log(a * b);
}

function dividir(a, b) {
    console.log(a / b);
}