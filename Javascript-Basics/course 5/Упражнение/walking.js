function walking(input) {
    let index = 0;
    let currentSteps = Number(input[index]);

    let totalSteps = 0;
    while(index < input.length) {
        
        if(input[index] !== `Going home`) {            
            totalSteps += currentSteps;
        }
        index++;
        currentSteps = Number(input[index]);
    }
    let diff = Math.abs(totalSteps - 10000);

    if(totalSteps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
