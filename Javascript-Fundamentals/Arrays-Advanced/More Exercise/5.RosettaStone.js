function rosettaStone(input) {
    const templateRowCount = Number(input.shift());


    const templateMatrix = input
    .slice(0, templateRowCount)
    .map(a => a.split(' ').map(Number));


    const messageMatrix = input
    .slice(templateRowCount)
    .map(a => a.split(' ').map(Number));

    const finalMessage = [];

    for(let i = 0; i < messageMatrix.length; i++) {
        for(let j = 0; j < messageMatrix[i].length; j++) {
            const currentNumber = messageMatrix[i][j];
            const currentTemplateNumber = templateMatrix[i % templateMatrix.length][j % templateMatrix[0].length];
            const numberSum = currentNumber + currentTemplateNumber;

            const charIndex = numberSum % 27;
            let currentCharacter;

            if(charIndex > 0) {
                currentCharacter = String.fromCharCode(charIndex + 64);
            } else {
                currentCharacter = ' ';
            }

            finalMessage.push(currentCharacter);
        }
    }
    
    // const processedMatrix = messageMatrix.map((a, i) => a.map((b, j) => {
    //     return b + templateMatrix[i % templateMatrix.length][j % templateMatrix[0].length];
    // }))

    console.log(finalMessage.join(''));
}


rosettaStone([ '2',

'59 36',

'82 52',

'4 18 25 19 8',

'4 2 8 2 18',

'23 14 22 0 22',

'2 17 13 19 20',

'0 9 0 22 22' ]);