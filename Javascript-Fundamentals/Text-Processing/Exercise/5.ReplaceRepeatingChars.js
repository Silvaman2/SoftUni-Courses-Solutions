function replaceRepetition(string) {
    let currentChar;
    let result = '';

    for(const char of string) {
        if(char !== currentChar) {
            currentChar = char;
            result += char;
        }
    }

    console.log(result);
}