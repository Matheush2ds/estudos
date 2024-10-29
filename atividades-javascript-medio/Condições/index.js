/*
Verificação de períodos do dia com base na hora:
- ENTRE 0 - 11 -> Bom dia
- ENTRE 12 - 17 -> Boa Tarde
- ENTRE 18 - 23 -> Boa Noite
*/

const hora = 30;  // Exemplo de valor para testar a lógica de horário

// Condicional para verificar em que período do dia estamos
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) { // Aqui estava "< 17", mas deveria ser "<= 17" para incluir as 17 horas
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Não existe esse horário'); // Validação para horas fora do intervalo permitido (0 a 23)
}

/*
Exemplo prático de condição booleana:
- Se tenhoGrana for verdadeiro, a ação será sair de casa.
- Se tenhoGrana for falso, a ação será não sair de casa.
*/

const tenhoGrana = true; // Definindo se você tem dinheiro ou não

if (tenhoGrana) {
    console.log('Vou sair de casa'); // Executa se tenhoGrana for true
} else {
    console.log('Não vou sair de casa'); // Executa se tenhoGrana for false
}
