const lista = document.querySelector('.operaciones');
const visor = document.querySelector('.monitor');
const primerInput = document.querySelector('#primero');
const segundoInput = document.querySelector('#segundo');

lista.addEventListener('click', (e) => {
    const valor1 = parseInt(primerInput.value);
    const valor2 = parseInt(segundoInput.value);

    if (e.target.tagName === 'IMG') {
        const nombreDeLaOperacion = e.target.id;

        switch (nombreDeLaOperacion) {
            case 'sumar':
                visor.innerHTML = valor1 + valor2;
                break;
            case 'restar':
                visor.innerHTML = valor1 - valor2;
                break;
            case 'multiplicar':
                visor.innerHTML = valor1 * valor2;
                break;
            case 'dividir':
                visor.innerHTML = valor1 / valor2;
                break;
            default:
                break;
        }
    }
});
