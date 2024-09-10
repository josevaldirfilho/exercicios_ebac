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
  Veiculo.call(this, modelo, ano);
}

// Função construtora para Moto que herda de Veículo
function Moto(modelo, ano, cilindrada) {
  this.cilindrada = cilindrada;
  Veiculo.call(this, modelo, ano);
}

// Instanciando um novo Carro
const carro1 = new Carro("Toyota Corolla", 2020, 4);
const carro2 = new Carro("Honda Civic", 2019, 4);

// Instanciando uma nova Moto
const moto1 = new Moto("Yamaha YZF", 2021, 600);

// Mostrando informações no console
carro1.displayInfo();  // Mostrará "Toyota Corolla é o modelo!"
carro2.displayInfo();  // Mostrará "Honda Civic é o modelo!"
moto1.displayInfo();   // Mostrará "Yamaha YZF é o modelo!"