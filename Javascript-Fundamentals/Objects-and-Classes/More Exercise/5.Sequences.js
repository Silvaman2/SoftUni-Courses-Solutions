function sequences(input) {
    const arrays = input.map(a => JSON.parse(a));
    let uniqueArrays = [];
    for(let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        if(uniqueArrays.every(a => !currentArray.every(b => a.includes(b)))) {
            uniqueArrays.push(currentArray);
        }
    }
    sortedArrays = uniqueArrays
    .map(a => a.sort((b, c) => c - b))
    .sort((a, b) => a.length - b.length);

    for(const array of sortedArrays) {
        console.log(`[${array.join(', ')}]`);
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",

"[10, 1, -17, 0, 2, 13]",

"[4, -3, 3, -2, 2, -1, 1, 0]"]);

sequences(["[7.14, 7.180, 7.339, 80.099]",

"[7.339, 80.0990, 7.140000, 7.18]",

"[7.339, 7.180, 7.14, 80.099]"]);