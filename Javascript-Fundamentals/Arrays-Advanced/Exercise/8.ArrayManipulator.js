function arrayManipulator(numbers, commands) {
    for(const command of commands) {
        let commandSegments = command.split(' ');
        const commandName = commandSegments.shift();
        commandSegments = commandSegments.map(Number);

        let index;
        let elements;

        switch(commandName) {
            case `add`:
                index = commandSegments[0];
                elements = commandSegments[1];
                add(index, elements);
                break;
            case `addMany`:
                index = commandSegments.shift();
                elements = commandSegments;
                addMany(index, elements);
                break;
            case `contains`:
                elements = commandSegments[0];
                contains(elements);
                break;
            case `remove`:
                index = commandSegments[0];
                remove(index);
                break;
            case `shift`:
                const positions = commandSegments[0];
                shift(positions);
                break;
            case `sumPairs`:
                sumPairs();
                break;
            case `print`:
                print();
                break;
        }
    }

    function add(index, element) {
        numbers.splice(index, 0, element);
    }
    function addMany(index, elements) {
        for(let i = elements.length - 1; i >= 0; i--) {
            numbers.splice(index, 0, elements[i]);
        }
    }
    function contains(element) {
        console.log(numbers.indexOf(element));
    }
    function remove(index) {
        numbers.splice(index, 1);
    }
    function shift(positions) {
        for(let i = 0; i < positions; i++) {
            numbers.push(numbers.shift());
        }
    }
    function sumPairs() {
        let result = [];
        for(i = 0; i < numbers.length; i+=2) {
            if(numbers[i + 1] != undefined) {
                const currentSum = numbers[i] + numbers[i + 1];
                result.push(currentSum);
            } else {
                result.push(numbers[i]);
            }
        }
        numbers = result;
    }
    function print() {
        console.log(`[ ${numbers.join(', ')} ]`);
    }
}


arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);