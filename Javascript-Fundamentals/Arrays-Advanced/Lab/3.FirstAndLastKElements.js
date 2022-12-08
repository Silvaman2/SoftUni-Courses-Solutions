function firstAndLastKelements(numbers) {
    const length = numbers.shift();
    const firstPart = numbers.slice(0, length);
    const lastPart = numbers.slice(numbers.length - length, numbers.length);

    console.log(firstPart.join(' '));
    console.log(lastPart.join(' '));
}

firstAndLastKelements([2, 7, 8, 9]);
console.log(`---------------------------`);
firstAndLastKelements([3, 6, 7, 8, 9]);