function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let staffAmount = Number(input[1]);
    let outfitCostPerStaff = Number(input[2]);

    let decorCost = budget * 0.1;
    let outfitCostTotal = staffAmount * outfitCostPerStaff;
    if(staffAmount > 150) {
        outfitCostTotal -= outfitCostTotal * 0.1;
    }

    totalCost = decorCost + outfitCostTotal;
    let remainder = Math.abs(totalCost - budget);

    if(budget >= totalCost) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${remainder.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${remainder.toFixed(2)} leva more.`);
    }
}