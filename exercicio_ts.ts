function multiplicacao(numero1: number, numero2: number): number {
  return numero1 * numero2;
}

function retornaSaudacao(nome: string): string {
  return `Olá ${nome}`;
}

// Exemplo de uso
const resultadoMultiplicacao = multiplicacao(4, 5);
console.log(resultadoMultiplicacao);  // Saída: 20

const saudacao = retornaSaudacao('José');
console.log(saudacao);  // Saída: Olá José