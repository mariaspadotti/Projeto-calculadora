// Inicializa a propriedade displayValue como uma string vazia.
let displayValue = '';

// Adiciona um valor ao displayValue e atualiza o visor.
function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

// Atualiza o elemento de input no HTML com o valor atual em displayValue.
function updateDisplay() {
  document.getElementById('displayContent').value = displayValue;
}

// Limpa o valor em displayValue e atualiza o visor com um valor vazio.
function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

// Calcula o valor da expressão matemática contida em displayValue.
// Utiliza a função eval() para avaliar a expressão e trata erros.
function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

// Interage com os elementos da calculadora no HTML.
// Cria uma instância chamada calc que será usada para chamar as funções acima.
const calc = {
  displayValue: displayValue,
  appendToDisplay: appendToDisplay,
  updateDisplay: updateDisplay,
  clearDisplay: clearDisplay,
  calculate: calculate,
};