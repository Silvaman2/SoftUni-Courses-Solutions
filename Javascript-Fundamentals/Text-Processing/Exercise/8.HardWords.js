function hardWords(input) {
    const [text, words] = input;
    const resultArray = text.split(' ');

    for(const word of resultArray) {
        if(!word.includes('_')) continue;
        const wordBlank = word
        .split('')
        .filter(a => a === '_')
        .join('');
        const searchWordIndex = words.findIndex(a => a.length === wordBlank.length);
        const searchWord = words.splice(searchWordIndex, 1);

        const resultWord = word.replace(wordBlank, searchWord);
        resultArray[resultArray.indexOf(word)] = resultWord;
    }

    console.log(resultArray.join(' '));
}


hardWords([`Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so

_______ things happened. My dad bought me a sled. Mom started a new job as a

__________. My brother\'s ankle is ________, and now it bothers me even more.

Every night Mom cooks ___ on your recipe because it is the most delicious. I

hope this year Santa will _____ me a robot.`,

['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);