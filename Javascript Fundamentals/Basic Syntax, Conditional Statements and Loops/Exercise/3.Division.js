function Division(number) {
    let biggestDivision;

    if(number % 10 === 0) {
        biggestDivision = 10;
    } else if(number % 7 === 0) {
        biggestDivision = 7;
    }else if(number % 6 === 0) {
        biggestDivision = 6;
    }else if(number % 3 === 0) {
        biggestDivision = 3;
    }else if(number % 2 === 0) {
        biggestDivision = 2;
    }

    if(biggestDivision != undefined) {
        console.log(`The number is divisible by ${biggestDivision}`);
    } else {
        console.log(`Not divisible`);
    }
}