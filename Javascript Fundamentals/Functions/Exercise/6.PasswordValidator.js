function passwordValidator(passwordInput) {
    let lengthIsValid = validLength(passwordInput);
    let hasValidChars = validChars(passwordInput);
    let validDigitCount = validDigits(passwordInput);

    if(!lengthIsValid) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if(!hasValidChars) {
        console.log(`Password must consist only of letters and digits`);
    }
    if(!validDigitCount) {
        console.log(`Password must have at least 2 digits`);
    }

    if(lengthIsValid && hasValidChars && validDigitCount) {
        console.log(`Password is valid`);
    }


    function validLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function validChars(password) {
        for(let char of password) {
            let charCode = char.charCodeAt(0);
            let isDigit = charCode >= 48 && charCode <= 57;
            let isUpperCase = charCode >= 65 && charCode <= 90;
            let isLowerCase = charCode >= 97 && charCode <= 122;

            if(!(isDigit || isUpperCase || isLowerCase)) {
                return false;
            }
        }
        return true;
    }

    function validDigits(password) {
        let digitCount = 0;
        for(let char of password) {
            let charCode = char.charCodeAt(0);
            let isDigit = charCode >= 48 && charCode <= 57;
            if(isDigit) {
                digitCount++;
            }
        }
        return digitCount >= 2;
    }
}