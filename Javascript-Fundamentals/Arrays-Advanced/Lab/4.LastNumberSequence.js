function lastNumberSequence(length, sumLength) {
    let numbers = [1];

    for(let i = 1; i < length; i++) {
        const rangeBeginning = Math.max(0, numbers.length - sumLength);
        const currentNumbers = numbers.slice(rangeBeginning);
        let result = 0;

        for(let number of currentNumbers) {
            result += number;
        }
        numbers.push(result);
    }

    console.log(numbers.join(' '));
}


lastNumberSequence(6, 3);
lastNumberSequence(8, 2);