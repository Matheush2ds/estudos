// Date é uma função construtora, funções construtoras começam com letra maiúscula
// const data = new Date(0); // Marco 0
// const data = new Date(2019, 3, 20, 15, 14, 27);

/* const data = new Date('2019-04-20 20:24:12');
console.log(`Dia:`, data.getDate());
console.log(`Mês:`, data.getMonth()); // Mês começa do zero
console.log(`Ano:`, data.getFullYear());
console.log(`Hora:`, data.getHours());
console.log(`Min:`, data.getMinutes());
console.log(`Seg:`, data.getSeconds());
console.log(`Dia da semana:`, data.getDay()); // Domingo = 0, Sábado = 6
*/

function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formaData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} ${hora}:${min}`;
}

const data = new Date();
const dataBrasil = formaData(data);
console.log(dataBrasil);
