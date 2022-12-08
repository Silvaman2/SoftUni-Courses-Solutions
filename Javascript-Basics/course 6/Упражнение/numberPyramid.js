function numberPyramid(input) {
    let num = Number(input[0]);

    let current = 1;
    for(let row = 1; current <= num; row++) {
        let rowPrint = '';
        for(let col = 1; col <= row; col++) {
            if(current > num) break;
            rowPrint += current + ' ';
            current++;
        }
        console.log(rowPrint);
    }
}
