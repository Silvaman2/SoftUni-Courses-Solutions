function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let waterResistanceInSeconds = 12.5 * Math.floor(distanceInMeters / 15);
    let swimTime = distanceInMeters * secondsPerMeter + waterResistanceInSeconds;
    let timeDifference = swimTime - recordInSeconds;

    if(swimTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${swimTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${timeDifference.toFixed(2)} seconds slower.`);
    }
}