function triplesOfLatinLetters(numString) {
    let number = Number(numString);

    for(let a = 0; a < number; a++) {
        let firstLetter;
        let secondLetter;
        let thirdLetter;

        firstLetter = String.fromCharCode(97 + a);
        for(let b = 0; b < number; b++) {
            secondLetter = String.fromCharCode(97 + b);
            for(let c = 0; c < number; c++) {
                thirdLetter = String.fromCharCode(97 + c);
                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
}