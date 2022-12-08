function numberModification(number) {
    let result = number;
    let average = numberAverage(result.toString().split(''));
    if(average > 5) {
        console.log(result);
    } else {
        result = appendNumber(result, 9);
        numberModification(result);
    }

    function numberAverage(numbers) {
        let sum = 0;
        for(let number of numbers) {
            sum += Number(number);
        }

        let result = sum / numbers.length;

        return result;
    }

    function appendNumber(baseNumber, number) {
        let numString = baseNumber.toString();
        let result = numString + number.toString();

        return Number(result);
    }
}