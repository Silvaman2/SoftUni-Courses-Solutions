function melrahShake([string, pattern]) {
    let currentPattern = pattern;
    let currentString = string;

    while(currentPattern) {
        const patternLength = currentPattern.length;
        const firstIndex = currentString.indexOf(currentPattern);
        let lastIndex = currentString.lastIndexOf(currentPattern);
        
        if(firstIndex === -1 || firstIndex === lastIndex) break;
        console.log('Shaked it.');

        const stringArray = currentString.split('');
        stringArray.splice(firstIndex, patternLength);
        lastIndex = stringArray.join('').lastIndexOf(currentPattern);
        stringArray.splice(lastIndex, patternLength);

        currentString = stringArray.join('');

        const patternChar = currentPattern[Math.floor(patternLength / 2)];
        currentPattern = currentPattern.replace(patternChar, '');
    }
    console.log('No shake.');
    console.log(currentString);
}