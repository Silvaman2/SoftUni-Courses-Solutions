function integerAndFloat(firstNumber, secondNumber, thirdNumber) {
    let sum = firstNumber + secondNumber + thirdNumber;
    let text = Number.isInteger(sum) ? ' - Integer' : ' - Float';

    console.log(sum + text);
}