// Condição ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 1500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Branca';
console.log (nivelUsuario, corPadrao);



