function modernTimes(string) {
    const wordArray = string.split(' ');
    const specialWords = [];

    for(const element of wordArray) {
        if(element.length > 1 && element.startsWith('#')) {
            const word = element.substring(1);
            let isSpecial = true;
            for(const char of word) {
                const charCode = char
                .toLowerCase()
                .charCodeAt(0);

                if(charCode < 97 || charCode > 122) {
                    isSpecial = false;
                    break;
                }
            }
            if(isSpecial) {
                specialWords.push(word);
            }
        }
    } 


    specialWords.forEach(word => console.log(word));
}