function arrayRotation(numberArray, rotationCount) {
    for(let i = 0; i < rotationCount; i++) {
        let currentRotation = numberArray.slice(1, numberArray.length);
        currentRotation.push(numberArray[0]);
        numberArray = currentRotation;
    }

    console.log(numberArray.join(' '));
}