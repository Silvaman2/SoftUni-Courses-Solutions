function dictionary(input) {
    const definitionsString = input.shift();
    const testWords = input.shift().split(' | ');
    const command = input.shift();
    const definitions = {};

    for(string of definitionsString.split(' | ')) {
        const [word, definition] = string.split(': ');
        if(definitions.hasOwnProperty(word)) {
            definitions[word].push(definition);
            continue;
        }
        definitions[word] = [definition];
    }

    if(command === 'Test') {
        for(word of testWords) {
            if(!definitions.hasOwnProperty(word)) continue;
            console.log(word + ':');
            for(definition of definitions[word]) {
                console.log(' -' + definition);
            }
        }
        return;
    }

    console.log(Object.keys(definitions).join(' '));
}


dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"]);