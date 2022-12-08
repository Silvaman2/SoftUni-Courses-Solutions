function minNumber(input) {
    let index = 0;
    let minNum = Number(input[index]);
    index++;
    let num = Number(input[index]);

    while(input[index] !== `Stop`) {
        if(num < minNum) {
            minNum = num;
        }
        index++;
        num = Number(input[index]);
    }
    console.log(minNum);
}