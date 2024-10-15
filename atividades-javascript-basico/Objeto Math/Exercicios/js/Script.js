const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const textoUm = document.getElementById('textoUm');
const textoDois = document.getElementById('texto2');
const textoTres = document.getElementById('texto3');
const textoQuatro = document.getElementById('texto4');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;
textoUm.innerHTML = `<p>Raiz Quadrada é ${numero ** 0.5}.</p>`;
textoDois.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
textoTres.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
textoQuatro.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
