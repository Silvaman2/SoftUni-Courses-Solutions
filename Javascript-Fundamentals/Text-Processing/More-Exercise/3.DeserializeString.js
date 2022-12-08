function deserializeString(input) {
    const result = [];

    while(input[0] != 'end') {
        const string = input.shift();
        const [[char], numbers] = string
        .split(':')
        .map(a => a.split('/'));

        numbers.forEach(number => result[number] = char);
    }

    console.log(result.join(''));
}