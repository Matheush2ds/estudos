const form = document.querySelector('#formulario');
const resultadoDiv = document.getElementById('resultado'); // Adicione esta linha

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('Peso').value);
    const altura = parseFloat(document.getElementById('Altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerText = 'Por favor, preencha ambos os campos corretamente.';
        resultadoDiv.style.color = 'red';
        return;
    }

    const imc = peso / (altura * altura);

    let mensagem;
    if (imc < 18.5) {
        mensagem = 'Abaixo do peso';
    } else if (imc < 24.9) {
        mensagem = 'Peso normal';
    } else if (imc < 29.9) {
        mensagem = 'Sobrepeso';
    } else if (imc < 34.9) {
        mensagem = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        mensagem = 'Obesidade grau 2';
    } else {
        mensagem = 'Obesidade grau 3';
    }

    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)}: ${mensagem}`;
    resultadoDiv.style.color = 'black';
});
