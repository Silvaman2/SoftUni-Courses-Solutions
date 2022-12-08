function stringSubstring(word, string) {
    const wordArray = string.toLowerCase().split(' ');
    if(wordArray.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(word, 'not found!');
    }
}