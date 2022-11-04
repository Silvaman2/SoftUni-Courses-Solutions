function sumFirstAndLast(numbers) {
    let firstNumber = Number(numbers[0]);
    let lastNumber = Number(numbers[numbers.length - 1]);
    let result = firstNumber + lastNumber;

    return result;
}