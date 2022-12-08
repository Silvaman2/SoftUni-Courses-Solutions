function tennisRanklist(input) {
    let index = 0;
    let competitionCount = Number(input[index]);
    index++;
    let initialPoints = Number(input[index]);
    index++;

    let wins = 0;
    let totalPoints = initialPoints;
    let competitionPoints = 0;
    for(let i = 0; i < competitionCount; i++) {
        switch(input[index]) {
            case 'W':
                competitionPoints += 2000;
                wins++;
                break;
            case 'F':
                competitionPoints += 1200;
                break;
            case 'SF':
                competitionPoints += 720;
                break;
        }
        index++;
    }

    let average = competitionPoints / competitionCount;
    let winPercent = (wins / competitionCount) * 100;
    totalPoints += competitionPoints;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${winPercent.toFixed(2)}%`);
}