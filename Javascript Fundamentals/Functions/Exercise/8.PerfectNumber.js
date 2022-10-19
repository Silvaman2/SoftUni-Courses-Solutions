function perfectNumber(number) {
    let properDivisors = getProperDivisors(number);
    let divisorSum = arraySum(properDivisors);
    let isPerfect = number === divisorSum;

    console.log(isPerfect ? `We have a perfect number!` : `It's not so perfect.`);

    function getProperDivisors(number) {
        let properDivisors = [];

        for(let i = 1; i < number; i++) {
            if(number % i == 0) {
                properDivisors.push(i);
            }
        }
        return properDivisors;
    }

    function arraySum(array) {
        let sum = 0;

        for(let number of array) {
            sum += number;
        }

        return sum;
    }
}