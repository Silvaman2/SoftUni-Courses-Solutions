function addAndSubtract(numberArray) {
    let modifiedArray = [];
    let sum = 0;
    let modifiedSum = 0;

    for(let i = 0; i < numberArray.length; i++) {
        if(numberArray[i] % 2 === 0) {
            modifiedArray.push(numberArray[i] + i);
        } else {
            modifiedArray.push(numberArray[i] - i);
        }

        modifiedSum += modifiedArray[i];
        sum += numberArray[i];
    }

    console.log(modifiedArray);
    console.log(sum);
    console.log(modifiedSum);
}