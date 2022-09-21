function PrintAndSum(minNumber, maxNumber) {
    let numString = '';
    let sum = 0;

    for(let i = minNumber; i <= maxNumber; i++) {
        numString += i + ` `;
        sum += i;
    }
    console.log(numString);
    console.log(`Sum: ${sum}`);
}