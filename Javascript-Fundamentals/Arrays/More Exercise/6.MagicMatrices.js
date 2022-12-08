function magicMatrices(numberMatrix) {
    let isMagical = true;
    let rowTotal = numberMatrix[0].reduce((a, b) => a + b);
    let colTotal = 0;

    for(let row of numberMatrix) {
        colTotal += row[0];
    }


    for(let i = 0; i < numberMatrix.length; i++) {
        let currentRow = numberMatrix[i].reduce((a, b) => a + b);
        let currentCol = 0;

        for(let j = 0; j < numberMatrix.length; j++) {
            currentCol += numberMatrix[j][i];
        }

        if(currentRow !== rowTotal || currentCol !== colTotal) {
            isMagical = false;
        } 
    }

    console.log(isMagical);
}