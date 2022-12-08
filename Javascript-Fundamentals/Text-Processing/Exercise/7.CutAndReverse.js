function cutAndReverse(string) {
    const firstPart = string
    .substring(0, string.length / 2)
    .split('')
    .reverse()
    .join('');
    const secondPart = string
    .substring(string.length / 2)
    .split('')
    .reverse()
    .join('');

    console.log(firstPart);
    console.log(secondPart);
}