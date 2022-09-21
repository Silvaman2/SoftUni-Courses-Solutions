function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let currentGrade = Number(input[index]);
    let passedGradesSum = 0;
    let failedCount = 0;

    let hasFailed = false;
    while(index < input.length) {
        if(currentGrade >= 4) {
            passedGradesSum += currentGrade;
        } else {
            failedCount++;
        }
        if (failedCount === 2) {
            hasFailed = true;
            break;
        }
        currentGrade = Number(input[index++]);
    }
    let average = passedGradesSum / (index - 1);

    if(!hasFailed) {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${index - 1} grade`);
    }
}
