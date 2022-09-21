function vacation(input) {
    let index = 0;
    let vacationCost = Number(input[index]);
    index++;
    let savings = Number(input[index]);
    index++;

    let daysCount = 0;
    let spendCounter = 0;
    while(index < input.length) {
        let action = input[index];
        index++;
        let amount = Number(index[input]);
        index++;
        daysCount++;
        switch(action) {
            case 'spend':
                savings -= amount;
                spendCounter++;
                if(savings < 0) {
                    savings = 0;
                }
                break;
            case 'save':
                savings += amount;
                spendCounter = 0;
                break;
        }
        if(spendCounter === 5) {
            break;
        }
    }

    if(spendCounter !== 5) {
        console.log(`You saved the money for ${daysCount} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(daysCount);
    }
}