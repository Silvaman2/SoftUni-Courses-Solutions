function countStringOccurrences(string, word) {
    let count = 0;

    for(const currentWord of string.split(' ')) {
        if(currentWord === word) {
            count++;
        }
    }

    console.log(count);
}