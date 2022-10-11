function reverseArray(count, numberArray) {
    let reversedArray = [];

    for(let i = count - 1; i >= 0; i--) {
        reversedArray.push(numberArray[i]);
    }

    console.log(reversedArray.join(' '));
}