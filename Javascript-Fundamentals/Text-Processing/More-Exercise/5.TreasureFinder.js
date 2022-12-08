function treasureFinder(input) {
    const keys = input.shift()
    .split(' ')
    .map(Number);

    while(input[0] !== 'find') {
        const string = input.shift();
        let resultString = '';
        for(let i = 0; i < string.length; i++) {
            const char = string[i];
            const charCode = char.charCodeAt(0);
            const key = keys[i % keys.length];
            const resultChar = String.fromCharCode(charCode - key);

            resultString += resultChar;
        }

        const type = resultString.split('&')[1];
        let coordinates = resultString.split('<').pop();
        coordinates = coordinates.slice(0, coordinates.length - 1);

        console.log(`Found ${type} at ${coordinates}`);
    }
}