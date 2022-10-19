function NxNMatrix(number) {
    for(let i = 0; i < number; i++) {
        console.log(repeatedNumber(number).join(' '));
    }


    function repeatedNumber(number) {
        let numberArray = [];
        for(let i = 0; i < number; i++) {
            numberArray.push(number);
        }
        return numberArray;
    }
}