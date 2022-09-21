function accountBalance(input) {
    let index = 0;
    currentDeposit = Number(input[index]);
    totalDeposit = 0;

    while(input[index] !== 'NoMoreMoney') {
        if(currentDeposit < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${currentDeposit.toFixed(2)}`);
        totalDeposit += currentDeposit;
        index++;
        currentDeposit = Number(input[index]);
    }
    console.log(`Total: ${totalDeposit.toFixed(2)}`);
}