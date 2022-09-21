function maidenParty(input) {
    let requiredMoney = Number(input[0]);
    let loveLetters = Number(input[1]);
    let roses = Number(input[2]);
    let keyHolders = Number(input[3]);
    let caricatures = Number(input[4]);
    let luckySurprise = Number(input[5]);

    let totalCount = loveLetters + roses + keyHolders + caricatures + luckySurprise; 

    let loveLetterCost = loveLetters * 0.6;
    let roseCost = roses * 7.2;
    let keyHolderCost = keyHolders * 3.6;
    let caricatureCost = caricatures * 18.2;
    let luckySurpriseCost = luckySurprise * 22;

    let budget = loveLetterCost + roseCost + keyHolderCost + caricatureCost + luckySurpriseCost;

    if(totalCount >= 25) {
        budget -= budget * 0.35;
    }
    budget -= budget * 0.1;

    let diff = Math.abs(budget - requiredMoney);

    if(budget >= requiredMoney) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}