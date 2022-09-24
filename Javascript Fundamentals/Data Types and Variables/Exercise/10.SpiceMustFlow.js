function spiceMustFlow(initialYield) {
    let totalSpice = 0;
    let currentYield = initialYield;
    let totalDays = 0;

    while(currentYield >= 100) {
        totalDays++;
        totalSpice += currentYield;
        totalSpice -= Math.min(totalSpice, 26);
        currentYield -= 10;
    }
    totalSpice -= Math.min(totalSpice, 26);

    console.log(totalDays);
    console.log(totalSpice);
}