function shopping(input) {
    let budget = Number(input[0]);
    let graphicsCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramStickCount = Number(input[3]);

    let graphicsCardCost = graphicsCardCount * 250;
    let processorCost = processorCount * (graphicsCardCost * 0.35);
    let ramStickCost = ramStickCount * (graphicsCardCost * 0.1);
    let getDiscount = graphicsCardCount > processorCount;

    let totalCost = graphicsCardCost + processorCost + ramStickCost;

    if(getDiscount) {
        totalCost -= totalCost * 0.15;
    }
    
    let difference = Math.abs(totalCost - budget);

    if(totalCost <= budget) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }
}