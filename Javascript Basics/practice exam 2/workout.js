function workout(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let firstDayDistance = Number(input[index]);
    index++;

    let totalDistance = firstDayDistance;
    let currentDistance = firstDayDistance;
    for(let i = 0; i < days; i++) {
        let percentage = input[index] / 100;
        currentDistance += currentDistance * percentage;
        totalDistance += currentDistance;
        index++;
    }
    let diff = Math.abs(totalDistance - 1000);

    if(totalDistance >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }
}