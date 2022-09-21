function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let judgeCount = Number(input[index]);
    index++;

    let totalPoints = academyPoints;
    let hasNominee = false;
    for (let i = 0; i < judgeCount; i++) {
        let currentName = input[index];
        index++;
        let currentPoints = Number(input[index]);
        index++;

        totalPoints += ((currentName.length * currentPoints) / 2);
        if (totalPoints > 1250.5) {
            hasNominee = true;
            break;
        }
    }

    if (hasNominee) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        let diff = Math.abs(1250.5 - totalPoints);
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
