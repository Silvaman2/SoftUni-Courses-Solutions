function lunchBreak(input) {
    let show = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * (1 / 8);
    let breatherTime = breakTime * (1 / 4);

    let leftoverTime = breakTime - lunchTime - breatherTime;
    let difference = Math.abs(episodeTime - leftoverTime);

    if(leftoverTime >= episodeTime) {
        console.log(`You have enough time to watch ${show} and left with ${Math.ceil(difference)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${show}, you need ${Math.ceil(difference)} more minutes.`);
    }
}