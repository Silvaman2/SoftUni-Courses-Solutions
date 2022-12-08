function searchForANumber(numbers, commands) {
    let count = 0;
    let result = numbers.slice(0, commands[0]);

    for(let i = 0; i < commands[1]; i++) {
        result.shift();
    }

    for(const number of result) {
        if(number === commands[2]) {
            count++;
        }
    }

    console.log(`Number ${commands[2]} occurs ${count} times.`);
}