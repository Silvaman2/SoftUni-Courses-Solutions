function factorialDivision(firstNumber, secondNumber) {
    let firstFactorial = getFactorial(firstNumber);
    let secondFactorial = getFactorial(secondNumber);
    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));


    function getFactorial(number) {
        let result = 1;
        for(let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    }
}