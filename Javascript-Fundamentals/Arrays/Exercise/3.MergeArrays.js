function mergeArrays(firstArray, secondArray) {
    let result = [];

    for(let i = 0; i < firstArray.length; i++) {
        let currentElement;
        if(i % 2 == 0) {
            currentElement = Number(firstArray[i]) + Number(secondArray[i]);
        } else {
            currentElement = firstArray[i] + secondArray[i];
        }
        result.push(currentElement);
    }

    console.log(result.join(' - '));
}