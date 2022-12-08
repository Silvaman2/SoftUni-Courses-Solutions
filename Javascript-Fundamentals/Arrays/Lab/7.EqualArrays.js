function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let areEqual = true;

    for(let i = 0; i < firstArray.length; i++) {
        sum += Number(firstArray[i]);
        if(firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if(areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}