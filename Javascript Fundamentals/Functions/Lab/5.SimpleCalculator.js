function simpleCalculator(firstNumber, secondNumber, operator) {
    let result;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch(operator) {
        case 'add':
            result = add(firstNumber, secondNumber);
            break;
        case 'subtract':
            result = subtract(firstNumber, secondNumber);
            break;
        case 'multiply':
            result = multiply(firstNumber, secondNumber);
            break;
        case 'divide':
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
}