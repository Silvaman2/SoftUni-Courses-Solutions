function maxSequenceOfEqualElements(numbers) {
    let maxSequenceArray = [];

    let currentSequenceArray = [];

    for(let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if(currentNumber === currentSequenceArray[0]) {
            currentSequenceArray.push(currentNumber);
        } else {
            currentSequenceArray = [currentNumber];
        }
        if(currentSequenceArray.length > maxSequenceArray.length) {
            maxSequenceArray = currentSequenceArray;
        }
    }


    console.log(maxSequenceArray.join(' '));
}