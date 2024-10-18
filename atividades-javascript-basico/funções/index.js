function saudacao(nome) {
    return(`Bom dia ${nome}!`);
};

const variavel = saudacao('Matheus');
console.log(variavel); 

//------------------------

function soma (x, y) {
    const resultado = x + y;
    return resultado; // Nada que será colocado após no return ira aparecer

};

const resultado = soma (52,25);
console.log (resultado);// não tem como modificar ou mexe o que tem dentro da função quando esta do lado de fora */


//------------------------

const raiz = function (n) { //Raiz é igual a uma função 
    return n ** 0.5;

};

console.log (raiz(9));
console.log (raiz(16));
console.log (raiz(25));

//------ Arrow function

const arrowraiz = n => n ** 0.5;

console.log (arrowraizraiz(81));
console.log (arrowraiz(625));