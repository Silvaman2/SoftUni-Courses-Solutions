function activationKeys(input) {
    let key = input.shift();

    while(input[0] !== 'Generate') {
        const command = input.shift().split('>>>');

        switch(command.shift()) {
            case 'Contains':
            {   
                const substring = command.shift();
                if(key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
            }
                break;
            case 'Flip':
            {
                const [filter, startIndex, endIndex] = command;
                const substring = key.substring(startIndex, endIndex);
                key = key.replace(substring, filter === 'Upper' ? substring.toUpperCase() : substring.toLowerCase());
                console.log(key);
            }
                break;
            case 'Slice':
            {
                const [startIndex, endIndex] = command;
                const substring = key.substring(startIndex, endIndex);
                key = key.replace(substring, '');
                console.log(key);
            }
                break;
        }
    }
    console.log('Your activation key is:', key);
}