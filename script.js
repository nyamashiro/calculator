let calculatorObj = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  fullExpression: false,
  displayNumbers: "",
}

const numberButtons = document.querySelector(".number-buttons-container");
const clearButton = document.querySelector("#clear")
const operatorButtons = document.querySelector(".operator-buttons-container")
const display = document.querySelector(".display-container")
const numberOnDisplay = document.createElement("div");

function displayFirstNumber(num) {
  calculatorObj.firstNumber += `${num}`;
  calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`;
  numberOnDisplay.textContent = calculatorObj.displayNumbers;
  display.appendChild(numberOnDisplay);
  console.log(calculatorObj);
}

function displaySecondNumber(num) {
  calculatorObj.secondNumber += `${num}`;
  calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`;
  numberOnDisplay.textContent = calculatorObj.displayNumbers;
  display.appendChild(numberOnDisplay);
  console.log(calculatorObj);
}

function displayOperator(op) {
  calculatorObj.operator = `${op}`;
  calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`;
  numberOnDisplay.textContent = calculatorObj.displayNumbers;
  display.appendChild(numberOnDisplay);
  console.log(calculatorObj);
}

function clearSettings() {
  calculatorObj.firstNumber = "";
  calculatorObj.secondNumber = "";
  calculatorObj.operator = "";
  calculatorObj.fullExpression = false;
}

function clearDisplay() {
  clearSettings()
  calculatorObj.displayNumbers = "";
  numberOnDisplay.textContent = calculatorObj.displayNumbers;
  display.appendChild(numberOnDisplay);
}

clearButton.addEventListener("click", () => {
  clearDisplay();
})

operatorButtons.addEventListener("click", (e) => {
  let target = e.target;
    switch (target.id) {
      case "+":
        displayOperator(target.id);
        break;

      case "-":
        displayOperator(target.id);
        break;

      case "*":
        displayOperator(target.id);
        break;

      case "/":
        displayOperator(target.id);
        break;

      case "=":
        operate(calculatorObj.firstNumber, calculatorObj.secondNumber, calculatorObj.operator);
        clearSettings();
        calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`
        break;
    }
})

numberButtons.addEventListener("click", (e) => {
  let target = e.target;
  if (calculatorObj.operator) {
    switch (target.id) {
      case "9":
        displaySecondNumber(target.id)
        break;

      case "8":
        displaySecondNumber(target.id)
        break;

      case "7":
        displaySecondNumber(target.id)
        break;

      case "6":
        displaySecondNumber(target.id)
        break;

      case "5":
        displaySecondNumber(target.id)
        break;

      case "4":
        displaySecondNumber(target.id)
        break;

      case "3":
        displaySecondNumber(target.id)
        break;

      case "2":
        displaySecondNumber(target.id)
        break;

      case "1":
        displaySecondNumber(target.id)
        break;

      case "0":
        displaySecondNumber(target.id)
        break;
    }
  } else {
    switch (target.id) {
      case "9":
        displayFirstNumber(target.id)
        break;

      case "8":
        displayFirstNumber(target.id)
        break;

      case "7":
        displayFirstNumber(target.id)
        break;

      case "6":
        displayFirstNumber(target.id)
        break;

      case "5":
        displayFirstNumber(target.id)
        break;

      case "4":
        displayFirstNumber(target.id)
        break;

      case "3":
        displayFirstNumber(target.id)
        break;

      case "2":
        displayFirstNumber(target.id)
        break;

      case "1":
        displayFirstNumber(target.id)
        break;

      case "0":
        displayFirstNumber(target.id)
        break;
    }
  }
})

function add(firstNumber, secondNumber) {
  return parseInt(firstNumber) + parseInt(secondNumber)
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      numberOnDisplay.textContent = add(firstNumber, secondNumber);
      break;

    case "-":
      numberOnDisplay.textContent = subtract(firstNumber, secondNumber);
      break;

    case "*":
      numberOnDisplay.textContent = multiply(firstNumber, secondNumber);
      break;

    case "/":
      numberOnDisplay.textContent = divide(firstNumber, secondNumber);
      break;
  }
  display.appendChild(numberOnDisplay);
}