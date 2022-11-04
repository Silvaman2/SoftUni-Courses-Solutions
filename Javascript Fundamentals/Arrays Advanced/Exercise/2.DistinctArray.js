function distinctArray(numbers) {
    let result = numbers.filter((number, index) => !numbers.slice(0, index).includes(number));

    return result.join(' ');
}