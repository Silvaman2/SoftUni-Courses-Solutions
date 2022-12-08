function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    
    let totalSum = 0;
    let gradesCounter = 0;
    while(input[index] !== `Finish`) {
        let currentSum = 0;
        let currentName = input[index];
        index++;
        for(let i = 0; i < juryCount; i++) {
            let currentScore = Number(input[index]);
            currentSum += currentScore;
            gradesCounter++;
            index++;
        }
        let currentAvr = currentSum / juryCount;
        totalSum += currentSum;
        console.log(`${currentName} - ${currentAvr.toFixed(2)}.`);
    }
    let avr = totalSum / gradesCounter;

    console.log(`Student's final assessment is ${avr.toFixed(2)}.`);
}