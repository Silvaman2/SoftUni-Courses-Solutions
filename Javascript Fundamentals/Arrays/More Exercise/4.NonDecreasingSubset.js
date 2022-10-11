function nonDecreasingSubset(numbers) {
    let maxNumber = numbers[0];
    let resultArray = [];

    for(let number of numbers) {
        if(number >= maxNumber) {
            maxNumber = number;
            resultArray.push(number);
        }
    }


    console.log(resultArray.join(' '));
}