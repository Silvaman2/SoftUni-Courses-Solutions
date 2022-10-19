function oddAndEvenSum(number) {

    console.log(`Odd sum = ${oddSum(number)}, Even sum = ${evenSum(number)}`);

    function evenSum(number) {
        let numbers = number.toString().split('');
        let sum = 0;

        for(let numString of numbers) {
            let currentNumber = Number(numString);
            if(currentNumber % 2 == 0) {
                sum += currentNumber;
            }
        }

        return sum;
    }
    function oddSum(number) {
        let numbers = number.toString().split('');
        let sum = 0;

        for(let numString of numbers) {
            let currentNumber = Number(numString);
            if(currentNumber % 2 != 0) {
                sum += currentNumber;
            }
        }

        return sum;
    }
}