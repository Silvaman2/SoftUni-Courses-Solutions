function imitationGame(input) {
    let message = input.shift();

    while(input[0] !== 'Decode') {
        const stringArray = input.shift().split('|');
        const command = stringArray.shift();
        const arguments = stringArray;

        switch(command) {
            case 'Move':
            {
                const [letterCount] = arguments;
                const substring = message.substring(0, letterCount);
                message = message
                    .replace(substring, '')
                    .concat(substring);
            }
                break;
            case 'Insert':
            {
                const [index, char] = arguments;
                const messageArray = message.split('');
                messageArray.splice(index, 0, char);
                message = messageArray.join('');
            }
                break;
            case 'ChangeAll':
            {
                const [substring, replacement] = arguments;
                while(message.includes(substring)) {
                    message = message.replace(substring, replacement);
                }
            }
                break;
        }
    }

    console.log('The decrypted message is:', message);
}