function sumDigits(number) {
    let numberAsString = number.toString();
    let sum = 0;
    let digitCount = numberAsString.length;


    for(let i = 0; i < digitCount; i++) {
        let currentNumber = Number(numberAsString[i]);

        sum += currentNumber;
    }

    console.log(sum);
}