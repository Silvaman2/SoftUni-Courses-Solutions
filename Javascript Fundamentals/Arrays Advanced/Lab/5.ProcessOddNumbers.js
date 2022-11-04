function processOddNumbers(numbers) {
    let processedArray = [];

    for(let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const result = currentNumber * 2;

        if(i % 2 != 0) {
            processedArray.unshift(result);
        }
    }

    console.log(processedArray.join(' '));
}