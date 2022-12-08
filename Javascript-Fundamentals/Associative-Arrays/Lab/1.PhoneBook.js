function phoneBook(book) {
    const result = {};
    for(const currentEntry of book) {
        const [name, number] = currentEntry.split(' ');

        result[name] = number;
    }

    for(const currentName in result) {
        console.log(`${currentName} -> ${result[currentName]}`);
    }
}