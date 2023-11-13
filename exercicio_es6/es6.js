class Aluno {
    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno
        this.nota = notaDoAluno
    }
}

const aluno1 = new Aluno('Vitor', '10');
const aluno2 = new Aluno('Caio', '9');
const aluno3 = new Aluno('Marcos', '4');
const aluno4 = new Aluno('Eduarda', '10');
const aluno5 = new Aluno('Júlia', '2');
const aluno6 = new Aluno('Maria', '6');
const aluno7 = new Aluno('Rodrigo', '3');

const alunos = [aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7];

alunos.map((nomeAtual) => {
    if (nomeAtual.nota >= 6){
        console.log(nomeAtual)
    }
})