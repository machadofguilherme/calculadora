const elements = {
    // Display.
    showValue1: document.querySelector('#showValue1'),
    showOperator: document.querySelector('#showOperator'),
    showValue2: document.querySelector('#showValue2'),
    showResult: document.querySelector('#showResult'),

    // Operators.
    btnMore: document.querySelector('#btnMore'),
    btnSub: document.querySelector('#btnSub'),
    btnMult: document.querySelector('#btnMult'),
    btnDivide: document.querySelector('#btnDivide'),
    btnEqual: document.querySelector('#btnEqual'),
    btnClear: document.querySelector('#btnClear'),

    // Values.
    btn0: document.querySelector('#btn0'),
    btn1: document.querySelector('#btn1'),
    btn2: document.querySelector('#btn2'),
    btn3: document.querySelector('#btn3'),
    btn4: document.querySelector('#btn4'),
    btn5: document.querySelector('#btn5'),
    btn6: document.querySelector('#btn6'),
    btn7: document.querySelector('#btn7'),
    btn8: document.querySelector('#btn8'),
    btn9: document.querySelector('#btn9'),

    // Date.
    year: document.querySelector('#year'),
};

// Global variables.
let operatorValue;
let numberValue1;
let numberValue2;
let validator = true;
let equalValue;

// Operation system.
function operation(resultOperation) {
    if (operatorValue == '+') {
        var resultOperation = Math.round(parseInt(showValue1.textContent) + parseInt(showValue2.textContent));
    } else if (operatorValue == '-') {
        var resultOperation = Math.round(parseInt(showValue1.textContent) - parseInt(showValue2.textContent));
    } else if (operatorValue == '×') {
        var resultOperation = Math.round(parseInt(showValue1.textContent) * parseInt(showValue2.textContent));
    } else if (operatorValue == '÷') {
        var resultOperation = Math.round(parseInt(showValue1.textContent) / parseInt(showValue2.textContent));
    }
    elements.showResult.append(resultOperation);
    validator = true;
}

// Operators.
elements.btnMore.addEventListener('click', () => {
    operatorValue = '+';
    elements.showOperator.innerHTML = operatorValue;
    validator = false;
})

elements.btnSub.addEventListener('click', () => {
    operatorValue = '-';
    elements.showOperator.innerHTML = operatorValue;
    validator = false;
})

elements.btnMult.addEventListener('click', () => {
    operatorValue = '×';
    elements.showOperator.innerHTML = operatorValue;
    validator = false;
})

elements.btnDivide.addEventListener('click', () => {
    operatorValue = '÷';
    elements.showOperator.innerHTML = operatorValue;
    validator = false;
})

elements.btnClear.addEventListener('click', () => {
    elements.showValue1.textContent = '';
    elements.showValue2.textContent = '';
    elements.showOperator.textContent = '';
    elements.showResult.textContent = '';
    validator = true;
})

elements.btnEqual.addEventListener('click', () => {
    equalValue = '=';
    operation();
})

// Numbers.
elements.btn0.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn0.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn0.textContent);
        elements.showValue2.append(numberValue2);   
    }
})

elements.btn1.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn1.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn1.textContent);
        elements.showValue2.append(numberValue2); 
    }
})

elements.btn2.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn2.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn2.textContent);
        elements.showValue2.append(numberValue2);
    }
})

elements.btn3.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn3.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn3.textContent);
        elements.showValue2.append(numberValue2);   
    }
})

elements.btn4.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn4.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn4.textContent);
        elements.showValue2.append(numberValue2); 
    }
})

elements.btn5.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn5.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn5.textContent);
        elements.showValue2.append(numberValue2); 
    }
})

elements.btn6.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn6.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn6.textContent);
        elements.showValue2.append(numberValue2);
    }
})

elements.btn7.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn7.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn7.textContent);
        elements.showValue2.append(numberValue2); 
    }
})

elements.btn8.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn8.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn8.textContent);
        elements.showValue2.append(numberValue2);
    }
})

elements.btn9.addEventListener('click', () => {
    if (validator == true) {
        numberValue1 = parseInt(btn9.textContent);
        elements.showValue1.append(numberValue1);
    } else if (validator == false) {
        numberValue2 = parseInt(btn9.textContent);
        elements.showValue2.append(numberValue2);
    }
})

elements.year.innerHTML = new Date().getFullYear();