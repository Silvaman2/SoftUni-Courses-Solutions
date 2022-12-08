function sumNumbers(input){
    let index = 1;
    let num = Number(input[0]);
    let sum = 0;
    while(sum < num) {
        sum += Number(input[index]);
        index++;
    }
    console.log(sum);
}