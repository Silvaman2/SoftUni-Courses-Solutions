function skeleton(input) {
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);
    let distanceInMeters = Number(input[2]);
    let secondsPer100Meters = Number(input[3]);

    let totalSeconds = (minutes * 60) + seconds;
    let delay = distanceInMeters / 120;
    let totalDelay = delay * 2.5;

    let completionTime = (distanceInMeters / 100) * secondsPer100Meters - totalDelay;
    let diff = Math.abs(completionTime - totalSeconds);

    if(totalSeconds >= completionTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${completionTime.toFixed(3)}.`);   
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}