function equalSums(numberArray) {
    let middleIndex;

    for(let i = 0; i < numberArray.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for(let leftIndex = i - 1; leftIndex >= 0; leftIndex--) {
            let currentNumber = numberArray[leftIndex];
            leftSum += currentNumber;
        }
        for(let rightIndex = i + 1; rightIndex < numberArray.length; rightIndex++) {
            let currentNumber = numberArray[rightIndex];
            rightSum += currentNumber;
        }

        if(leftSum === rightSum) {
            middleIndex = i;
            break;
        }
    }

    if(middleIndex != undefined) {
        console.log(middleIndex);
    } else {
        console.log(`no`);
    }
}