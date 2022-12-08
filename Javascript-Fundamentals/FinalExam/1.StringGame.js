function stringGame(input) {
    const string = input.shift();
    commands = {
        change,
        includes,
        end,
        uppercase:upperCase,
        findindex:findIndex,
        cut
    }
    let result = string;

    let currentString;
    while ((currentString = input.shift()) != 'Done') {
        const args = currentString.split(' ');
        const command = args.shift().toLowerCase();
        commands[command](args);
    }


    function change(args) {
        const [char, replacement] = args;
        while (result.includes(char)) {
            result = result.replace(char, replacement);
        }
        console.log(result);
    }

    function includes(args) {
        const [substring] = args;
        console.log(result.includes(substring) ? 'True' : 'False');
    }

    function end(args) {
        const [substring] = args;
        console.log(result.endsWith(substring) ? 'True' : 'False');
    }
    function upperCase(args) {
        result = result.toUpperCase();
        console.log(result);
    }

    function findIndex(args) {
        const [char] = args;
        console.log(result.indexOf(char));
    }

    function cut(args) {
        const [startIndex, count] = args.map(Number);
        const substring = result.substring(startIndex, startIndex + count);
        result = substring;
        console.log(result);
    }
}


stringGame(['//Th1s 1s my str1ng!//',
'Change 1 i',
'Includes string',
'End my',
'Uppercase',
'FindIndex I',
'Cut 5 5',
'Done'])