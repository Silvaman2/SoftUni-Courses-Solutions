function maxNumber(input) {
    let index = 0;
    let maxNum = Number(input[index]);
    index++;
    let num = Number(input[index]);

    while(input[index] !== `Stop`) {
        if(num > maxNum) {
            maxNum = num;
        }
        index++;
        num = Number(input[index]);
    }
    console.log(maxNum);
}