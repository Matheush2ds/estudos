function criaPessoa (nome, sobrenome, idade) { // Parâmetros
    return {nome,sobrenome,idade};
}

const pessoa1 = criaPessoa ('Matheus', 'Henrique', 22); //Argumento -> è o valor passado para o parâmetro
const pessoa2 = criaPessoa ('Tatiane', 'Gabana', 21);
const pessoa3 = criaPessoa ('Tandera', 'Purcina', 13);

console.log (pessoa1.nome);
console.log (pessoa2.nome);
console.log (pessoa3.nome); 

/*const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Henrique',
    idade: 21,

    fala () {
        console.log (`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++

    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala(); */