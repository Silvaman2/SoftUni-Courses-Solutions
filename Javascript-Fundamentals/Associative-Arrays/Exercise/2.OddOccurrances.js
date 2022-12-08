function oddOccurrences(input) {
    const string = input.split(' ').map(a => a.toLowerCase())

    const elements = {};

    for(const element of string) {
        if(elements.hasOwnProperty(element)) {
            elements[element]++;
        } else {
            elements[element] = 1;
        }
    }
    const filteredElements = Object
    .entries(elements)
    .filter(([element, count]) => count % 2 !== 0)
    .map(element => element[0]);

    console.log(filteredElements.join(' '));
}