function equalSumsEvenOddPos(input) {
    let rangeMin = Number(input[0]);
    let rangeMax = Number(input[1]);

    let printNums = '';
    for(let i = rangeMin; i <= rangeMax; i++) {
        let stringNum = i.toString();
        let oddSum = 0;
        let evenSum = 0;
        for(let i2 = 0; i2 < stringNum.length; i2++) {
            if(i2 % 2 === 0) {
                evenSum += Number(stringNum[i2]);
            } else {
                oddSum += Number(stringNum[i2]);
            }
        }
        if(oddSum === evenSum) {
            printNums += stringNum + ' ';
        }
    }
    console.log(printNums);
}