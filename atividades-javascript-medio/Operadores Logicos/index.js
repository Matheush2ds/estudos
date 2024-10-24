/*
Operadores Lógicos:
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÂO
*/


//Exemplo de AND
const expressaoAnd = true && true && true; //Todas tem que ser verdadeira no AND

const usuario = 'Matheus'; //form usuario digitou
const senha = '123445'; //form usuario digitou

const vaiLogar = usuario === 'Matheus' && senha === '123445';
console.log(vaiLogar);

//Exemplo de OR

const expressaoOr = true || false; // Pelo menos 1 tem que ser ou verdadeira para retornar true ou todas tem que ser falsa para ser false
const usuarioOr = 'Matheus'; //form usuario digitou
const senhaOr = '123445'; //form usuario digitou

const vaiLogarOr = usuarioOr === 'Matheus' || senhaOr === '12345'; // Usuario loga no sistema só com 1

//Exemplo de Not

console.log(!true); //Nega o valor true vira false
console.log(!false); //Nega o valor false vira true