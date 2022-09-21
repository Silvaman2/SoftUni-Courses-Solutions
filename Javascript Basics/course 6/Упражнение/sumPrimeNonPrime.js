function sumPrimeNonPrime(input) {

    let primeSum = 0;
    let nonPrimeSum = 0;
    for(let i = 0; input[i] !== 'stop'; i++) {
        let num = Number(input[i]);
        let isPrime = true;
        if(num < 0) {
            console.log(`Number is negative.`);
            continue;
        }
        for(let i2 = 2; i2 <= Math.sqrt(num); i2++) {
            if(num % i2 === 0){
                nonPrimeSum += num;
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            primeSum += num;
        }
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"]);