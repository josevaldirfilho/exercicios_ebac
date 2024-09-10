/* abstração */


class Veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }

  displayInfo() {
    console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}`);
  }
}