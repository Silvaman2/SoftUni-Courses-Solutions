function addAndRemove(commands) {
    let number = 1;
    let numberArray = [];

    for(let command of commands) {
        switch(command) {
            case 'add':
                numberArray.push(number);
                break;
            case 'remove':
                numberArray.pop();
                break;
        }
        number++;
    }

    console.log(numberArray.length == 0 ? 'Empty' : numberArray.join(' '));
}