function Triangle(number) {
    for(let i = 1; i <= number; i++) {
        let numString = '';
        for(let i2 = 0; i2 < i; i2++) {
            numString += i + ' ';
        }
        console.log(numString);
    }
}