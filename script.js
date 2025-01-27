let displayNumbers = "";
let firstNumber = "";
let secondNumber = "";
let operator;

const number = document.querySelector(".buttons-container");
const display = document.querySelector(".display-container")
const numberOnDisplay = document.createElement("div");

function displayFirstNumber(num) {
  firstNumber += `${num}`
  numberOnDisplay.textContent = firstNumber;
  display.appendChild(numberOnDisplay)
  console.log(firstNumber)
}

function clearDisplay() {
  firstNumber = "";
  numberOnDisplay.textContent = firstNumber;
  display.appendChild(numberOnDisplay)
  console.log(firstNumber)
}

// function displayOperator(op) {
//   operator = `${op}`;
//   numberOnDisplay.textContent = operator;
//   display.appendChild(numberOnDisplay);
//   console.log(operator)
// }

number.addEventListener("click", (e) => {
  let target = e.target;

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

    case "clear":
      clearDisplay();
  }
})

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber
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
      return add(firstNumber, secondNumber);

    case "-":
      return subtract(firstNumber, secondNumber);

    case "*":
      return multiply(firstNumber, secondNumber);

    case "/":
      return divide(firstNumber, secondNumber);
  }
}