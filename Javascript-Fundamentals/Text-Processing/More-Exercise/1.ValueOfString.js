function valueOfString([string, filter]) {
    let filteredString;
    if(filter === 'UPPERCASE') {
        filteredString = string.match(/[A-Z]+/g).join('');
    } else {
        filteredString = string.match(/[a-z]+/g).join('');
    }
    let sum = 0;

    for(const char of filteredString) {
        const charCode = char.charCodeAt(0);
        sum += charCode;
    }
    console.log('The total sum is:', sum);
}

