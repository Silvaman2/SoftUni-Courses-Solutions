function evenAndOddSubtraction(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for(let number of numbers) {
        if(number % 2 == 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }
    let diff = evenSum - oddSum;

    console.log(diff);
}