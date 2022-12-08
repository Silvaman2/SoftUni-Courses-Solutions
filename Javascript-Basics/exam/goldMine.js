function goldMine(input) {
    let index = 0;
    let locationCount = Number(input[index]);
    index++;

    for(let i = 0; i < locationCount; i++) {
        let estimatePerDay = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;
        let totalGain = 0;
        for(let i2 = 0; i2 < days; i2++) {
            let currentGain = Number(input[index]);
            totalGain += currentGain;
            index++;
        }
        let avr = totalGain / days;
        let diff = Math.abs(avr - estimatePerDay);

        if(avr < estimatePerDay) {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${avr.toFixed(2)}.`);
        }
    }
}