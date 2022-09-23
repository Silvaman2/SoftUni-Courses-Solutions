function amazingNumbers(number) {
    let numString = number.toString();
    let sum = 0;

    for(let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }

    let result = sum.toString();

    console.log(`${number} Amazing? ${result.includes('9') ? 'True' : 'False'}`);

}
