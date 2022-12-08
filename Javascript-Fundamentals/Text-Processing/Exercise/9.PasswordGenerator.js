function passwordGenerator(input) {
    const [firstString, secondString, specialWord] = input;
    const initialPassword = firstString.concat(secondString);
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const resultArray = initialPassword.split('');
    let vowelCount = 0;

    for(let i = 0; i < resultArray.length; i++) {
        const char = resultArray[i];
        if(!vowels.includes(char.toLowerCase())) continue;

        const specialChar = specialWord[vowelCount % specialWord.length];
        resultArray[i] = specialChar.toUpperCase();

        vowelCount++;
    }
    
    const resultPassword = resultArray.reverse().join('');

    console.log('Your generated password is', resultPassword);
}