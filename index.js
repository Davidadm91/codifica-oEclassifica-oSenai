let alunosPresente = ['david', 'ana', 'pedro', 'carla', 'maria', 'flavio']

if (alunosPresente.length == 0) {
  console.log('O número de pessoas é ZERO')
} else if (alunosPresente.length % 2 == 1) {
  console.log('O número de alunos(a) é ÍMPAR ' + alunosPresente.length)
} else if (alunosPresente.length % 2 == 0) {
  console.log('O número de alunos(a) é PAR ' + alunosPresente.length)
}
for (i = 0; i < alunosPresente.length; i++) {
  console.log('Nome do(a) aluno(a) é ' + alunosPresente[i])
}
