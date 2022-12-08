function printDNA(length) {
    let sequenceString = 'ATCGTTAGGG';

    for(let i = 0; i < length; i++) {
        let stringIndex = (i * 2) % sequenceString.length;
        let firstLetter = sequenceString[stringIndex];
        let secondLetter = sequenceString[stringIndex + 1];
        let currentDNA;

        switch(i % 4) {
            case 0:
                currentDNA = `**${firstLetter}${secondLetter}**`;
                break;
            case 2:
                currentDNA = `${firstLetter}----${secondLetter}`;
                break;
            case 1:
            case 3:
                currentDNA = `*${firstLetter}--${secondLetter}*`;
                break;
        }
        console.log(currentDNA);
    }
}