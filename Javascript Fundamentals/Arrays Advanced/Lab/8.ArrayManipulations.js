function arrayManipulations(input) {
    let numbers = input.shift()
    .split(' ')
    .map(Number);

    for(let commands of input) {
        let [command, firstParameter, secondParameter] = commands.split(' ');
        firstParameter = Number(firstParameter);
        secondParameter = Number(secondParameter);

        switch(command) {
            case `Add`:
                numbers.push(firstParameter);
                break;
            case `Remove`:
                numbers = numbers.filter(a => a != firstParameter);
                break;
            case `RemoveAt`:
                numbers.splice(firstParameter, 1);
                break;
            case `Insert`:
                numbers.splice(secondParameter, 0, firstParameter);
                break;
        }
    }

    console.log(numbers.join(' '));
}


arrayManipulations(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3']);