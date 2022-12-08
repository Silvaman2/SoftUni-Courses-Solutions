function lettersChange(input) {
    const strings = input
    .split(' ')
    .filter(Boolean);
    let result = 0;

    for(const string of strings) {
        const stringArray = string.split('');

        const firstLetter = stringArray.shift();
        const secondLetter = stringArray.pop();
        const number = Number(stringArray.join(''));

        let currentResult = leftLetter(firstLetter, number);
        currentResult = rightLetter(secondLetter, currentResult);

        result += currentResult;
    }


    console.log(result.toFixed(2));

    function leftLetter(letter, number) {
        if(letter === letter.toLowerCase()) {
            return number * alphabetPosition(letter);
        } else {
            return number / alphabetPosition(letter);
        }
    }
    function rightLetter(letter, number) {
        if(letter === letter.toLowerCase()) {
            return number + alphabetPosition(letter);
        } else {
            return number - alphabetPosition(letter);
        }
    }


    function alphabetPosition(letter) {
        return letter.toLowerCase().charCodeAt(0) - 96;
    }
}

lettersChange('A12b s17G');