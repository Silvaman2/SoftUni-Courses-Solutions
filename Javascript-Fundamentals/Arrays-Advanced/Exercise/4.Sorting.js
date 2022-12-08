function sorting(numbers) {
    let length = numbers.length;
    let result = [];
    for(let i = 0; i < length; i++) {
        let currentNumber;

        if(i % 2 === 0) {
            currentNumber = numbers.sort((a, b) => b - a).shift();
        } else {
            currentNumber = numbers.sort((a, b) => a - b).shift();
        }
        result.push(currentNumber);
    }

    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);