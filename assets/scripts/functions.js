const userInput = document.getElementById('user-input');

const addButton = document.getElementById('add-btn');
const subtractButton = document.getElementById('subtract-btn');
const multiplyButton = document.getElementById('multiply-btn');
const divideButton = document.getElementById('divide-btn');

const calculationDescription = document.getElementById('calc-description');
const calculationResult = document.getElementById('calc-result');

function showResultOnDom (result, description) {
  calculationDescription.textContent = result;
  calculationResult.textContent=  description;

}