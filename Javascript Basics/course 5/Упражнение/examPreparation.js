function examPreparation(input) {
    let index = 0;
    let maxFails = Number(input[index]);
    index++;

    let currentBook;
    let problemCount = 0;
    let scoreSum = 0;
    let failCount = 0;
    let hasFailed = false;
    while(input[index] !== 'Enough') {
        if(failCount === maxFails) {
            hasFailed = true;
            break;
        }
        currentBook = input[index];
        index++;
        if(Number(input[index]) <= 4) {
            failCount++;
        }
        scoreSum += Number(input[index]);
        index++
        problemCount++;
    }
    let scoreAverage = scoreSum / problemCount;

    if(!hasFailed) {
        console.log(`Average score: ${scoreAverage.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${currentBook}`);
    } else {
        console.log(`You need a break, ${failCount} poor grades.`);
    }
}