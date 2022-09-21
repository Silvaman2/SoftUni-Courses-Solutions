function traveling(input) {
    let index = 0;
    let currentDestination = input[index];
    index++;
    let currentBudget = Number(input[index]);
    index++;

    let savings = 0;
    while(index < input.length) {
        if(Number(input[index])) {
            let amount = Number(input[index]);
            savings += amount;
        } else {
            if(savings >= currentBudget) {
                console.log(`Going to ${currentDestination}!`);
                savings = 0;
            }
            currentDestination = input[index];
            index++;
            currentBudget = Number(input[index]);
        }
        index++;
    }
}
