function wordsTracker(input) {
    const magicWords = input
    .shift()
    .split(' ');

    const tracker = new Map(magicWords.map(a => [a, 0]));

    for(const word of input) {
        const wordCount = tracker.get(word);
        if(tracker.has(word)) {
            tracker.set(word, wordCount + 1);
        }
    }
    const sortedTracker = Array
    .from(tracker)
    .sort((a, b) => b[1] - a[1]);

    for(const [word, count] of sortedTracker) {
        console.log(word, `-`, count);
    }
}