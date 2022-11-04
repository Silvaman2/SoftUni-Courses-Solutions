function experienceGaining(input) {
    const target = input.shift();
    const battleCount = input.shift();
    const expGains = input;
    let totalExperience = 0;

    for(let i = 1; i <= expGains.length; i++) {
        const currentGain = expGains[i - 1];
        totalExperience += currentGain;
        if(i % 3 === 0) {
            totalExperience += currentGain * 0.15;
        }
        if(i % 5 === 0) {
            totalExperience -= currentGain * 0.1;
        }
        if(i % 15 === 0) {
            totalExperience += currentGain * 0.05;
        }

        if(totalExperience >= target) {
            return `Player successfully collected his needed experience for ${i} battles.`;
        }
    }
    const diff = target - totalExperience;

    return `Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`
}


console.log(experienceGaining([400, 5, 50, 100, 200, 100, 20,]));