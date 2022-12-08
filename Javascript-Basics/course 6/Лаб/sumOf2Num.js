function sumOf2Num(input) {
    let rangeMin = Number(input[0]);
    let rangeMax = Number(input[1]);
    let goalNum = Number(input[2]);

    let combinationCounter = 0;
    let combinationFound = false;
    for(let n1 = rangeMin; n1 <= rangeMax; n1++) {
        for(let n2 = rangeMin; n2 <= rangeMax; n2++) {
            combinationCounter++;
            let result = n1 + n2;
            if(result === goalNum) {
                console.log(`Combination N:${combinationCounter} (${n1} + ${n2} = ${goalNum})`);
                combinationFound = true;
                break;
            }
        }
        if(combinationFound) break;
    }
    if(!combinationFound) {
        console.log(`${combinationCounter} combinations - neither equals ${goalNum}`);
    }

}