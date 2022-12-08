function reverseInPlace(array) {

    for(let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]]
    }

    console.log(array.join(' '));
}