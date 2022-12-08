function jansNotation(input) {
    const operandCount = input.filter(a => typeof a === 'number').length;
    const operatorCount = input.filter(a => typeof a === `string`).length;

    if(operatorCount < operandCount - 1) {
        return `Error: too many operands!`;
    }
    const result = [];

    for(const element of input) {
        if(typeof element === `number`) {
            result.push(element);
        } else if(result.length >= 2) {
            const secondNumber = result.pop();
            const firstNumber = result.pop();
            result.push(operation(firstNumber, secondNumber, element));
        } else {
            return `Error: not enough operands!`;
        }
    }

    return result[0];

    function operation(firstNumber, secondNumber, operator) {
        switch(operator) {
            case `+`:
                return firstNumber + secondNumber;
            case `-`:
                return firstNumber - secondNumber;
            case `*`:
                return firstNumber * secondNumber;
            case `/`:
                return firstNumber / secondNumber;
        }
    }
}