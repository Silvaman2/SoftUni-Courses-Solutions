function magicSum(numberArray, magicNumber) {
    for(let i = 0; i < numberArray.length; i++) {
        for(let j = i + 1; j < numberArray.length; j++) {
            let firstNumber = numberArray[i];
            let secondNumber = numberArray[j];

            let currentSum = firstNumber + secondNumber;

            if(currentSum === magicNumber) {
                console.log(`${firstNumber} ${secondNumber}`);
            }
        }
    }
}