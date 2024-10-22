/*Primitivos imutáveis = String, number, boolean, undefined
null (bigint, symbol)
*/

/* let nome = 'Matheus';
nome [0] = 'R'; //Imutável
console.log(nome);
*/

/* let a = 'A';
let b = a; //Copiando o valor de a para a variável b

console.log (b);

a = 'Outra coisa';
console.log (a,b); 
*/

// Referência (mutável) - Arrats, Object , Functions - Passados por referencia

/*let a = [1, 2, 3];
let b = a;
let c = b;
console.log (a,b);

a.push (4);
console.log (a,b);

b.pop();
console.log(b);

console.log(c); */

const a = {
    nome: 'Matheus',
    sobrenome: 'Henrique'
};

const b = a;

a.nome = 'Tatiane'
console.log(b);


