function smallestTwoNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    let smallestNumbers = numbers.slice(0, 2);
    console.log(smallestNumbers.join(' '));
}