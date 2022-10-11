function CondenseArrayToNumber(numArray) {
    let condensedArray;

    while(numArray.length != 1) {
        condensedArray = [];
        for(let i = 0; i < numArray.length - 1; i++) {
            let currentSum = numArray[i] + numArray[i + 1];
            condensedArray.push(currentSum);
        }
        numArray = condensedArray;
    }
    
    console.log(numArray[0]);
}


