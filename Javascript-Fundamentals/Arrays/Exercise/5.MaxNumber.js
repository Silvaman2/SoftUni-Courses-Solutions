function maxNumber(numbers) {
    let topArray = [];

    for(let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let isTop = true;
        for(let j = i + 1; j < numbers.length; j++) {
            if(currentNumber <= numbers[j]) {
                isTop = false;
                break;
            }
        }
        if(isTop) {
            topArray.push(currentNumber);
        }
    }

    console.log(topArray.join(' '));
}