function negativeOrPositive(input) {
    let numbers = [];

    for(let element of input) {
        let number = Number(element);
        if(number < 0) {
            numbers.unshift(number);
        } else {
            numbers.push(number);
        }
    }
    for(let number of numbers) {
        console.log(number);
    }
}