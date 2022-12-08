function seriesCalculator(input) {
    let name = input[0];
    let seasonCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let runTimeWithoutAds = Number(input[3]);

    let adTime = runTimeWithoutAds * 0.2;
    let runTime = runTimeWithoutAds + adTime;

    let totalWatchTime = runTime * episodeCount * seasonCount + (10 * seasonCount);
    console.log(`Total time needed to watch the ${name} series is ${totalWatchTime} minutes.`);
}
