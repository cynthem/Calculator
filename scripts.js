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
//const decimalBtn = document.querySelector('.decimal');
//const equalBtn = document.querySelector('.equal');

clearBtn.onclick = () => clearDisplay();
deleteBtn.onclick = () => backspace();
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
    if (displayBottom.textContent === '0') {
        displayBottom.textContent = '';
    }
    displayBottom.textContent += number;
}

function operatorUpdate(operator) {
    let bottomDisplay = displayBottom.textContent;
    displayTop.textContent = `${bottomDisplay} ${operator}`;
}