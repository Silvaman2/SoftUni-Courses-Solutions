function cinema(input) {
    let projectionType = input[0];
    let rowCount = Number(input[1]);
    let columnCount = Number(input[2]);

    let ticketCost;

    if(projectionType === 'Premiere') {
        ticketCost = 12;
    } else if(projectionType === 'Normal') {
        ticketCost = 7.5;
    } else if(projectionType === 'Discount') {
        ticketCost = 5;
    }

    let totalIncome = ticketCost * rowCount * columnCount;

    console.log(`${totalIncome.toFixed(2)} leva`);
}