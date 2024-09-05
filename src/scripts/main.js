document.getElementById('imcForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o formulário de enviar

  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var imc = peso / (altura * altura);

  var resultado = document.getElementById('resultado');
  if (!isNaN(imc)) { // Verifica se IMC é um número válido
    resultado.textContent = 'Seu IMC é: ' + imc.toFixed(2);
  } else {
    resultado.textContent = 'Por favor, insira valores válidos para peso e altura.';
  }
});