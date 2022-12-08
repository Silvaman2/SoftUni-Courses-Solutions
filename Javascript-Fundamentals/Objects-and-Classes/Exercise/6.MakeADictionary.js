function makeaDictionary(input) {
    const dictionary = {};
    for(const jsonString of input) {
        const currentWord = JSON.parse(jsonString);
        const [term, description] = Object.entries(currentWord)[0];
        dictionary[term] = description;
    }
    const dictionaryEntries = Object.entries(dictionary);
    dictionaryEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for(const entry of dictionaryEntries) {
        const [term, description] = entry;

        console.log(`Term: ${term} => Definition: ${description}`);
    }
}