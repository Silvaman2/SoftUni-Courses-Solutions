function wordOccurrences(input) {
    const wordMap = new Map();

    for(const word of input) {
        const wordCount = wordMap.get(word);

        wordMap.set(word, wordCount ? wordCount + 1 : 1);
    }
    const sortedWords = Array
    .from(wordMap)
    .sort((a, b) => b[1] - a[1]);

    for(const [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);