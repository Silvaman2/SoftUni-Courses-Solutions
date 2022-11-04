function bombNumbers(numbers, bomb) {
    const length = numbers.length;
    const [bombNumber, bombRange] = bomb;

    for(let i = 0; i < length; i++) {
        const currentNumber = numbers[i];
        const explosionStart = Math.max(0, i - bombRange);
        const explosionEnd = Math.min(numbers.length - 1, i + bombRange);
        const currentRange = Math.abs(explosionStart - explosionEnd - 1);

        if(currentNumber === bombNumber) {
            numbers.splice(explosionStart, currentRange);
            i = 0;
        }
    }

    let sum = 0;

    for(const number of numbers) {
        sum += number;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);