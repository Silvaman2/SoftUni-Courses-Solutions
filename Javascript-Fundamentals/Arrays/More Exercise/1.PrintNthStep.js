function printNthStep(elementArray) {
    let length = elementArray.length;
    let step = Number(elementArray[length - 1]);
    let stepArray = [];

    for(let i = 0; i < length - 1; i += step) {
        stepArray.push(elementArray[i]);
    }

    console.log(stepArray.join(' '));
}