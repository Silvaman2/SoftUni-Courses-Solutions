function sequence2k1(input) {
    let num = Number(input[0]);
    let currentNum = 1;

    while(currentNum <= num) {
        console.log(currentNum);
        currentNum = (currentNum * 2) + 1;
    }
}