// Função construtora para Veículo
function Veiculo(modelo, ano) {
  this.modelo = modelo;
  this.ano = ano;
  this.displayInfo = function () {
    console.log(`${this.modelo} é o modelo!`);
  };
}

// Função construtora para Carro que herda de Veículo
function Carro(modelo, ano, numPortas) {
  this.numPortas = numPortas;
  Veiculo.call(this, modelo, ano); // Chamando Veiculo como 'super' usando 'call'
}

// Instanciando um novo Carro
const carro1 = new Carro("Toyota Corolla", 2020, 4);
carro1.displayInfo();  // Mostrará "Toyota Corolla é o modelo!"