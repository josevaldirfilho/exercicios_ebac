const alunos = [
  { nome: "Gustavo", nota: 5 },
  { nome: "Julia", nota: 7 },
  { nome: "Paula", nota: 9 },
  { nome: "Wagner", nota: 4 },
  { nome: "Fernanda", nota: 6 },
  { nome: "Lucas", nota: 8 }
];

function alunosAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);