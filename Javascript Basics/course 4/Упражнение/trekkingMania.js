function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++;

    let climbersPerMountain = [0, 0, 0, 0, 0];
    let totalClimbers = 0;
    for(let i = 0; i < groupCount;i++) {
        let climbersPerGroup = Number(input[index]);
        index++;
        totalClimbers += climbersPerGroup;
        if(climbersPerGroup <= 5) {
            climbersPerMountain[0] += climbersPerGroup;
        } else if(climbersPerGroup <= 12) {
            climbersPerMountain[1] += climbersPerGroup;
        } else if(climbersPerGroup <= 25) {
            climbersPerMountain[2] += climbersPerGroup;
        } else if(climbersPerGroup <= 40) {
            climbersPerMountain[3] += climbersPerGroup;
        } else {
            climbersPerMountain[4] += climbersPerGroup;
        }
    }
    for(let i = 0; i < 5; i++) {
        let per = (climbersPerMountain[i] / totalClimbers) * 100;
        console.log(`${per.toFixed(2)}%`);
    }
}