function revealWords(words, string) {
    const wordArray = words.split(', ');
    let result = string;

    for(const word of wordArray) {
        result = result.replace('*'.repeat(word.length), word);
    }
    console.log(result);

}