function charactersInRange(firstChar, secondChar) {
    let characterRange = returnCharRange(firstChar, secondChar);

    return characterRange.join(' ');


    function returnCharRange(a, b) {
        let minCharCode = Math.min(a.charCodeAt(0), b.charCodeAt(0));
        let maxCharCode = Math.max(a.charCodeAt(0), b.charCodeAt(0));
        let charArray = [];

        for (let i = minCharCode + 1; i < maxCharCode; i++) {
            let currentChar = String.fromCharCode(i);
            charArray.push(currentChar);
        }
        return charArray;
    }
}