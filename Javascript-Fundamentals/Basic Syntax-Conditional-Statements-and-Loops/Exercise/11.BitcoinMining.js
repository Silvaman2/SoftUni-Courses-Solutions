function BitcoinMining(daysArray) {
    let totalBGN = 0;
    let totalBitcoins = 0;

    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;

    let firstPurchaseDay;

    for(let i = 0; i < daysArray.length; i++) {
        let CurrentGold = daysArray[i];
        if((i+1) % 3 === 0) {
            CurrentGold -= CurrentGold * 0.3;
        }
        totalBGN += CurrentGold * goldPrice;

        let currentBitcoins = Math.floor(totalBGN / bitcoinPrice);
        totalBitcoins += currentBitcoins;
        totalBGN -= currentBitcoins * bitcoinPrice;

        if(totalBitcoins !== 0 && firstPurchaseDay === undefined) {
            firstPurchaseDay = i+1;
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if(firstPurchaseDay != undefined) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`);
    }
    console.log(`Left money: ${totalBGN.toFixed(2)} lv.`);
}