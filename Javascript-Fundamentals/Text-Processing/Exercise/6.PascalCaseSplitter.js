function pascalCaseSplitter(string) {
    const words = [];
    let currentWord = '';

    for(const char of string) {
        if(char !== char.toLowerCase()) {
            if(currentWord) {
                words.push(currentWord);
                currentWord = '';
            }
        }
        currentWord += char;
    }
    words.push(currentWord);
    console.log(words.join(', '));
}