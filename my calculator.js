var firstNumber = 0;
var secondNumber = 0;
var operator = '';
var operatorIdJustPressed = false;
var result = 0;

var txtAnwser = document.getElementById('txtAnswer');

function numberBtnClicked(number) {
    if (operatorIdJustPressed) {
        txtAnwser.value = 0;
        operatorIdJustPressed = false;
    }
    var currentNumber = txtAnwser.value;
    if (number === '.' && currentNumber.indexOf('.') > -1) {
        return;
    }

    if (number === '.' && currentNumber === '0') {
        txtAnwser.value = '0.';
        return;
    }

    if (txtAnwser.value === '0') {
        txtAnwser.value = number;
        return;
    }

    txtAnwser.value += number;
}

function clearBtnClicked() {
    txtAnwser.value = '0';
}

function deleteBtnClicked() {
    if (txtAnwser.value === '0') {
        return;
    }

    txtAnwser.value = txtAnwser.value.substring(0, txtAnwser.value.length - 1);

    if (txtAnwser.value === '' || txtAnwser.value === '-') {
        txtAnwser.value = 0;
    }
}

function nagativeBtnClicked() {
    var currentValue = parseFloat(txtAnwser.value);
    currentValue = currentValue * -1;
    txtAnwser.value = currentValue;
}

function operatorBtnClicked(opt) {
    operator = opt;
    firstNumber = parseFloat(txtAnwser.value);
    operatorIdJustPressed = true;
}

function equalityBtnClicked() {
    secondNumber = parseFloat(txtAnwser.value);
    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        result = firstNumber / secondNumber;
    }

    txtAnwser.value = result;
    operatorIdJustPressed = true;
}
function sqrtBtnclik() {
    var currentNumbeter = parseFloat(txtAnwser.value);
    txtAnwser.value = Math.sqrt(currentNumbeter);
    operatorIdJustPressed = true;
}



