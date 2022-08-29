const defaultResult = 0;
let currentResult = defaultResult;
let calculationLogEntries = [];

function getNumerFromUser() {
  return parseInt(userInput.value);
}

function calculationLog(operator, resultBeforeCalc, userCalcNumber) {
  let calcDescription = `${resultBeforeCalc} ${operator} ${userCalcNumber}`;
  showResultOnDom(currentResult, calcDescription);
}

function log(operatorIdentifier,prevNumber,userNumber,result) {
  const dataLog = {
    operator: operatorIdentifier,
    prevNumber: prevNumber,
    userInputNumber: userNumber,
    finalResult: result
  }

  calculationLogEntries.push(dataLog);
  console.log(calculationLogEntries);
}


function resultOfTheCalculation (calculationType) {
  const userEnteredNumber = getNumerFromUser();

  if(
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' 
    ){
      return; 
  }

  const initialUserInput = currentResult;
  let mathOperator;

  if(calculationType === 'ADD'){
    currentResult = currentResult + userEnteredNumber;
    mathOperator = '+';
  }else if(calculationType === 'SUBTRACT') {
    currentResult -= userEnteredNumber;
    mathOperator = '-';
  }else if(calculationType === 'MULTIPLY') {
    currentResult *= userEnteredNumber;
    mathOperator = '*';
  }else if (calculationType === 'DIVIDE') {
    currentResult /= userEnteredNumber;
    mathOperator = '/';
  }

  calculationLog(mathOperator, initialUserInput, userEnteredNumber)
  log(calculationType,initialUserInput,userEnteredNumber,currentResult)
}


function add() {
  resultOfTheCalculation ('ADD')
}

function subtract() {
  resultOfTheCalculation ('SUBTRACT')
}

function multiply() {
  resultOfTheCalculation ('MULTIPLY')
}

function divide() {
  resultOfTheCalculation ('DIVIDE')
}


addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);

// Array have a lot of built-in method that we are going to learn through the course
// Array is a list of elements that show some data
// object ==> highly realated information