function Pyramid(baseSize, increment) {
    let currentStepSize = baseSize;
    let totalSteps = 1;
    
    let stoneAmount = 0;
    let marbleAmount = 0;
    let lapisAmount = 0;

    while(currentStepSize >= 3) {
        let stepArea = Math.pow(currentStepSize, 2);
        let innerArea = Math.pow(currentStepSize-2, 2);
        let outerLayer = stepArea - innerArea;

        stoneAmount += innerArea * increment;
        if(totalSteps % 5 === 0) {
            lapisAmount += outerLayer * increment;
        } else {
            marbleAmount += outerLayer * increment;
        }

        totalSteps++;
        currentStepSize -= 2;
    }
    let goldAmount = Math.pow(currentStepSize, 2) * increment;
    let height = totalSteps * increment;

    console.log(`Stone required: ${Math.ceil(stoneAmount)}`);
    console.log(`Marble required: ${Math.ceil(marbleAmount)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisAmount)}`);
    console.log(`Gold required: ${Math.ceil(goldAmount)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}