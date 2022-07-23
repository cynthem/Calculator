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
//const decimalBtn = document.querySelector('.decimal');


clearBtn.onclick = () => clearDisplay();
deleteBtn.onclick = () => backspace();
equalBtn.onclick = () => evaluateOperation();
numberBtns.forEach((button) => 
    button.addEventListener('click', () => numberUpdate(button.textContent))
);
operatorBtns.forEach((button) => 
    button.addEventListener('click', () => operatorUpdate(button.textContent))
);

function clearDisplay() {
    displayTop.textContent = '';
    displayBottom.textContent = '0';
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

function operatorUpdate(operator) {
    if (currentOperator !== null) evaluateOperation();
    currentOperator = operator;
    firstNumber = displayBottom.textContent;
    displayTop.textContent = `${firstNumber} ${currentOperator}`;
    operatorEntered = true;
}

function evaluateOperation() {
    if (currentOperator === null || operatorEntered) return;
    secondNumber = displayBottom.textContent;
    displayBottom.textContent = evaluateEquation(currentOperator, firstNumber, secondNumber);
    displayTop.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`;
    currentOperator = null;
}

function evaluateEquation(operator, a, b) {}