const numberInput = document.querySelector('#input');
const clearButton = document.querySelector('#clear');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const calculatorButton = document.querySelector('#calculator');
const resultInput = document.querySelector('#result');

let temp;
let operator;

plusButton.addEventListener('click', () => {
    if (temp) {
        operator = '+'
        numberInput.value = null
    } else {
        if(numberInput.value) {
            temp = Number(numberInput.value)
            operator = '+'
            numberInput.value = null
        } // 아닐경우를 무시할경우엔 else 생략 가능
    }
})

minusButton.addEventListener('click', () => {
    if (temp) {
        operator = '-'
        numberInput.value = null
    } else {
        if(numberInput.value) {
            temp = Number(numberInput.value)
            operator = '-'
            numberInput.value = null
        } // 아닐경우를 무시할경우엔 else 생략 가능
    }
})

divideButton.addEventListener('click', () => {
    if (temp) {
        operator = '/'
        numberInput.value = null
    } else {
        if(numberInput.value) {
            temp = Number(numberInput.value)
            operator = '/'
            numberInput.value = null
        } // 아닐경우를 무시할경우엔 else 생략 가능
    }
})

multiplyButton.addEventListener('click', () => {
    if (temp) {
        operator = '*'
        numberInput.value = null
    } else {
        if(numberInput.value) {
            temp = Number(numberInput.value)
            operator = '*'
            numberInput.value = null
        } // 아닐경우를 무시할경우엔 else 생략 가능
    }
})

clearButton.addEventListener('click', () => {
    numberInput.value = null
    resultInput.value = null
    temp = null
    operator = null //null, undefined 빈값
})

calculatorButton.addEventListener('click', () => {
    if (operator) {
        if (numberInput.value) {
            if (operator === '+') {
                resultInput.value = temp + Number(numberInput.value)
            } else if (operator === '-') {
                resultInput.value = temp - Number(numberInput.value)
            } else if (operator === '*') {
                resultInput.value = temp * Number(numberInput.value)
            } else if (operator === '/') {
                resultInput.value = temp / Number(numberInput.value)
            }
            temp = Number(resultInput.value)
        }   
    } else {
        if (numberInput.value) {
            resultInput.value = temp
        }
    }
})