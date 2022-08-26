const defaultResult = 0;
let currentResult = defaultResult;

function getNumerFromUser() {
  return parseInt(userInput.value);
}

function calculationLog(operator, resultBeforeCalc, userCalcNumber) {
  let calcDescription = `${resultBeforeCalc} ${operator} ${userCalcNumber}`;
  showResultOnDom(currentResult, calcDescription);
}

function add() {
  const userEnteredNumber = getNumerFromUser();
  const initialUserInput = currentResult;
  currentResult = currentResult + userEnteredNumber;
  calculationLog('+', initialUserInput, userEnteredNumber)
}

function subtract() {
  const userEnteredNumber = getNumerFromUser();
  const initialUserInput = currentResult;
  currentResult = currentResult - userEnteredNumber;
  calculationLog('-', initialUserInput, userEnteredNumber)
}

function multiply() {
  const userEnteredNumber = getNumerFromUser();
  const initialUserInput = currentResult;
  currentResult = currentResult * userEnteredNumber;
  calculationLog('*', initialUserInput, userEnteredNumber)
}

function divide() {
  const userEnteredNumber = getNumerFromUser();
  const initialUserInput = currentResult;
  currentResult = currentResult * userEnteredNumber;
  calculationLog('*', initialUserInput, userEnteredNumber)
}


addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);