function emojiDetector([string]) {
    const emojiPattern = /([:*])\1(?<chars>[A-Z][a-z]{2,})\1{2}/g;
    let emojiCount = 0;

    const threshold = string
        .match(/\d/g)
        .map(Number)
        .reduce((a, b) => a * b);

    const coolEmojis = [];

    let emojiMatch;
    while(emojiMatch = emojiPattern.exec(string)) {
        emojiCount++;
        const chars = emojiMatch.groups.chars;
        const asciiSum = chars
            .split('')
            .map(char => char.charCodeAt(0))
            .reduce((a, b) => a + b);

        if(asciiSum > threshold) coolEmojis.push(emojiMatch[0]);
    }

    console.log('Cool threshold:', threshold);
    console.log(emojiCount, 'emojis found in the text. The cool ones are:');
    for(const emoji of coolEmojis) {
        console.log(emoji);
    }
}


