function palindromeInteger(numbers) {
    for(let number of numbers) {
        console.log(number === reverseInteger(number));
    }


    function reverseInteger(number) {
        let numString = number.toString();
        let reversedString = '';
        for(let i = numString.length - 1; i >= 0; i--) {
            reversedString += numString[i];
        }
        return Number(reversedString);
    }
}