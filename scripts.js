let currentOperator = null;
let operatorEntered = false;
let firstNumber = '';
let secondNumber = '';

const displayTop = document.querySelector('.display-top');
const displayBottom = document.querySelector('.display-bottom');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const decimalBtn = document.querySelector('.decimal');

clearBtn.onclick = () => clearDisplay();
deleteBtn.onclick = () => backspace();
equalBtn.onclick = () => evaluateOperation();
decimalBtn.onclick = () => decimalUpdate();
numberBtns.forEach((button) => 
    button.addEventListener('click', () => numberUpdate(button.textContent))
);
operatorBtns.forEach((button) => 
    button.addEventListener('click', () => operatorUpdate(button.textContent))
);

function clearDisplay() {
    displayTop.textContent = '';
    displayBottom.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
}

function backspace() {
    displayBottom.innerText = displayBottom.innerText.slice(0, -1);
    if (displayBottom.textContent === '') {
        displayBottom.textContent = '0';
    }
}

function numberUpdate(number) {
    if (displayBottom.textContent === '0' || operatorEntered) {
        displayBottom.textContent = '';
        operatorEntered = false;
    }
    displayBottom.textContent += number;
}

function decimalUpdate() {
    if (operatorEntered) {
        displayBottom.textContent = '';
        operatorEntered = false;
    }
    if (displayBottom.textContent === '') {
        displayBottom.textContent = '0';
    }
    if (displayBottom.textContent.includes('.')) return
    displayBottom.textContent += '.';
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
      currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
  }

function operatorUpdate(operator) {
    if (currentOperator !== null) evaluateOperation();
    currentOperator = operator;
    firstNumber = displayBottom.textContent;
    displayTop.textContent = `${firstNumber} ${currentOperator}`;
    operatorEntered = true;
}

function evaluateOperation() {
    if (currentOperator === null || operatorEntered) return;
    if (currentOperator === '÷' && displayBottom.textContent === '0') {
        alert("Nice try, but we all know the universe breaks when you divide by 0!");
        return
    }
    secondNumber = displayBottom.textContent;
    displayBottom.textContent = evaluateEquation(currentOperator, firstNumber, secondNumber);
    displayTop.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`;
    currentOperator = null;
}

function evaluateEquation(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return Math.round((a * b) * 1000) / 1000;
        case'÷':
            if (b === 0) return null;
            else return Math.round((a / b) * 1000) / 1000;
        default:
            return null;
    }
}