function oldBooks(input) {
    let index = 0;
    let rightBook = input[index];
    index++;
    let currentBook = input[index];

    let bookCount = 0;
    let foundBook = false;
    while(index < input.length) {
        if(currentBook === rightBook) {
            foundBook = true;
            break;
        }
        if(currentBook === 'No More Books') {
            break;
        } else {
            bookCount++;
        }
        index++;
        currentBook = input[index];
    }
    if (foundBook) {
        console.log(`You checked ${bookCount} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount} books.`);
    }
}