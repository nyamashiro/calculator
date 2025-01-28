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
  //numbers that the user inputs after equation is calculated (pressed =) will create a new first number instead of adding onto the result
  if (calculatorObj.displayNumbers == parseFloat(calculatorObj.firstNumber)) {
    calculatorObj.firstNumber += `${num}`;
    calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`;
    numberOnDisplay.textContent = calculatorObj.displayNumbers;
    display.appendChild(numberOnDisplay);
    console.log(calculatorObj)
  } else {
    calculatorObj.firstNumber = `${num}`;
    calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`;
    numberOnDisplay.textContent = calculatorObj.displayNumbers;
    display.appendChild(numberOnDisplay);
    console.log(calculatorObj)
  }
}

function displaySecondNumber(num) {
  calculatorObj.secondNumber += `${num}`;
  calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`;
  calculatorObj.fullExpression = true;
  numberOnDisplay.textContent = calculatorObj.displayNumbers;
  display.appendChild(numberOnDisplay);
  console.log(calculatorObj)
}

function displayOperator(op) {
  calculatorObj.operator = `${op}`;
  calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`;
  numberOnDisplay.textContent = calculatorObj.displayNumbers;
  display.appendChild(numberOnDisplay);
  console.log(calculatorObj)
}

function clearSettings() {
  calculatorObj.secondNumber = "";
  calculatorObj.operator = "";
  calculatorObj.fullExpression = false;
  console.log(calculatorObj)
}

function clearDisplay() {
  clearSettings()
  calculatorObj.displayNumbers = "";
  calculatorObj.firstNumber = "";
  numberOnDisplay.textContent = calculatorObj.displayNumbers;
  display.appendChild(numberOnDisplay);
  console.log(calculatorObj)
}

clearButton.addEventListener("click", () => {
  clearDisplay();
})

operatorButtons.addEventListener("click", (e) => {
  let target = e.target;
  if (calculatorObj.fullExpression) {
    switch (target.id) {
      case "+":
        operate(calculatorObj.firstNumber, calculatorObj.secondNumber, calculatorObj.operator);
        calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`
        clearSettings();
        displayOperator(target.id);
        break;

      case "-":
        operate(calculatorObj.firstNumber, calculatorObj.secondNumber, calculatorObj.operator);
        calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`
        clearSettings();
        displayOperator(target.id);
        break;

      case "*":
        operate(calculatorObj.firstNumber, calculatorObj.secondNumber, calculatorObj.operator);
        calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`
        clearSettings();
        displayOperator(target.id);
        break;

      case "/":
        operate(calculatorObj.firstNumber, calculatorObj.secondNumber, calculatorObj.operator);
        calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`
        clearSettings();
        displayOperator(target.id);
        break;

      case "=":
        if (parseFloat(calculatorObj.secondNumber) == 0) {
          calculatorObj.displayNumbers = "*finger wag* can't divide by 0 IDIT"
          clearSettings();
          calculatorObj.firstNumber = "";
          numberOnDisplay.textContent = calculatorObj.displayNumbers
          break;
        } else {
          operate(calculatorObj.firstNumber, calculatorObj.secondNumber, calculatorObj.operator);
          calculatorObj.displayNumbers = `${calculatorObj.firstNumber} ${calculatorObj.operator} ${calculatorObj.secondNumber}`
          clearSettings();

          break;
        }

    }
  } else {
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
    }
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
        if (parseFloat(calculatorObj.secondNumber) == 0 && !(calculatorObj.secondNumber).includes(".")) {
          return
        } else {
          displaySecondNumber(target.id)
          break;
        }

      case ".":
        if (calculatorObj.secondNumber == "") {
          displaySecondNumber(`0${target.id}`)
          break;
        } else if ((calculatorObj.secondNumber).includes(".")) {
          return
        } else {
          displaySecondNumber(target.id)
          break;
        }
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
        if (parseFloat(calculatorObj.firstNumber) == 0 && !(calculatorObj.firstNumber).includes(".")) {
          return
        } else {
          displayFirstNumber(target.id)
          break
        }

      case ".":
        if (calculatorObj.firstNumber == "") {
          displayFirstNumber(`0${target.id}`)
          break;
        }
        else if ((calculatorObj.firstNumber).includes(".")) {
          return
        } else {
          displayFirstNumber(target.id)
          break;
        }

    }
  }
})

function add(firstNumber, secondNumber) {
  return parseFloat((parseFloat(firstNumber) + parseFloat(secondNumber)).toFixed(5))
}

function subtract(firstNumber, secondNumber) {
  return parseFloat((firstNumber - secondNumber).toFixed(5))
}

function multiply(firstNumber, secondNumber) {
  return parseFloat((firstNumber * secondNumber).toFixed(5))
}

function divide(firstNumber, secondNumber) {
  return parseFloat((firstNumber / secondNumber).toFixed(5))
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      numberOnDisplay.textContent = add(firstNumber, secondNumber);
      calculatorObj.firstNumber = add(firstNumber, secondNumber);
      break;

    case "-":
      numberOnDisplay.textContent = subtract(firstNumber, secondNumber);
      calculatorObj.firstNumber = subtract(firstNumber, secondNumber);
      break;

    case "*":
      numberOnDisplay.textContent = multiply(firstNumber, secondNumber);
      calculatorObj.firstNumber = multiply(firstNumber, secondNumber);
      break;

    case "/":
      numberOnDisplay.textContent = divide(firstNumber, secondNumber);
      calculatorObj.firstNumber = divide(firstNumber, secondNumber);
      break;
  }
  display.appendChild(numberOnDisplay);
}