function serializeString([string]) {
    const characters = {};

    for(let i = 0; i < string.length; i++) {
        const char = string[i];
        if(!characters[char]) {
            characters[char] = [];
        }
        characters[char].push(i);
    }

    for(const char in characters) {
        const indexes = characters[char];
        console.log(`${char}:${indexes.join('/')}`);
    }
}
