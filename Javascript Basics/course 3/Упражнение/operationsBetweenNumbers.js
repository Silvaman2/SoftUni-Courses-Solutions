function opBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    
    let evenOrOdd;
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            result = result.toFixed(2);
            break;
        case '%':
            result = num1 % num2;
            break;
    }
    switch(operator) {
        case '+':
        case '-':
        case '*':
            if(result % 2 === 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case '/':
        case '%':
            if(num2 != 0) {
                console.log(`${num1} ${operator} ${num2} = ${result}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
            break;
    }
}