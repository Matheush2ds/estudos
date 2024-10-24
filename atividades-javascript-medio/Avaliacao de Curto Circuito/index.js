/*
Operadores Lógicos:

&& -> AND -> E
|| -> OR -> OU
!  -> NOT -> NÃO

Curto-circuito com && (E):
- Quando usamos o operador `&&`, ele retorna o primeiro valor "falsy" que encontrar.
- Se todos os valores forem "truthy", ele retorna o último valor.

Exemplo:
false && true => false "O valor mesmo"

FALSY (valores que são avaliados como false):
- false Literal
- 0
- '' (string vazia), "" (outra forma de string vazia), ` ` (aspas simples e crase vazia)
- null
- undefined
- NaN (Not a Number)
*/

console.log('Matheus' && true && 'Henrique'); // Retorna 'Henrique' (todos são truthy)
console.log('Matheus' && '' && 'Henrique');   // Retorna '' (primeiro valor falsy)

// Exemplo prático com curto-circuito usando &&:
function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi()); // false (a função nem é executada por causa do curto-circuito)

/*
Curto-circuito com || (OU):
- Quando usamos o operador `||`, ele retorna o primeiro valor "truthy" que encontrar.
- Se todos os valores forem "falsy", ele retorna o último valor falsy.

Exemplo:
true || false -> vai retornar "o valor verdadeiro"
*/

console.log(0 || false || null || 'Matheus' || true); // Retorna 'Matheus' (primeiro valor truthy)

// Exemplo prático de uso do operador || (OU):
// Em vez de usar uma estrutura if/else para definir uma cor padrão:
const corUsuario = null;
const corPadrao = corUsuario || 'red'; // Se corUsuario for null ou falsy, usa 'red' como padrão
console.log(corPadrao); // Retorna 'red' porque corUsuario é null

// Se corUsuario tiver um valor truthy:
const corUsuario2 = 'blue';
const corPadrao2 = corUsuario2 || 'red'; // 'blue' será usado porque é truthy
console.log(corPadrao2); // Retorna 'blue'
