function christmasGifts(input) {
    let adultCount = 0;
    let kidCount = 0;
    let adultMoney = 0;
    let kidMoney = 0;
    for(let i = 0; input[i] !== `Christmas`; i++) {
        let age = Number(input[i]);
        if(age <= 16) {
            kidCount++;
            kidMoney += 5;
        } else {
            adultCount++;
            adultMoney += 15;
        }
    }
    console.log(`Number of adults: ${adultCount}`);
    console.log(`Number of kids: ${kidCount}`);
    console.log(`Money for toys: ${kidMoney}`);
    console.log(`Money for sweaters: ${adultMoney}`);
}