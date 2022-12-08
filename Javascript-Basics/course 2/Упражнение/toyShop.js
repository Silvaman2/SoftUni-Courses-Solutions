function toyShop(input) {
    let tripCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    toyCount = puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;
    
    let puzzleCost = puzzleCount * 2.6;
    let talkingDollCost = talkingDollCount * 3;
    let teddyBearCost = teddyBearCount * 4.1;
    let minionCost = minionCount * 8.2;
    let truckCost = truckCount * 2;

    let totalCost = puzzleCost + talkingDollCost + teddyBearCost + minionCost + truckCost;

    if(toyCount >= 50) {
        totalCost -= totalCost * 0.25;
    }
    let gain = totalCost - (totalCost * 0.1);
    let difference = Math.abs(tripCost - gain);

    if(gain >= tripCost) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}