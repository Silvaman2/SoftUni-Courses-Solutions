function asciiSumator(input) {
    const string = input.pop();
    const charCodes = input.map(char => char.charCodeAt(0));
    const rangeStart = Math.min(...charCodes);
    const rangeEnd = Math.max(...charCodes);

    let sum = 0;

    for(const char of string) {
        const charCode = char.charCodeAt(0);
        if(charCode > rangeStart && charCode < rangeEnd) {
            sum += charCode;
        }
    }

    console.log(sum);
}