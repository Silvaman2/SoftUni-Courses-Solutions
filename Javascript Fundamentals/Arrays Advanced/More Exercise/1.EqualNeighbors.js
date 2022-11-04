function equalNeighbors(matrix) {
    let matchCount = 0;
    let matchIndexes = [];

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            const currentNumber = matrix[i][j];
            if(!matchIndexes.includes([j, i]) && hasEqual(j, i)) {
                matchIndexes.push([j, i]);
                matchCount++;
            }
        }
    }

    console.log(matchCount);

    function hasEqual(x, y) {
        const baseNumber = matrix[y][x];
        
        for(let i = y; i < matrix.length; i++) {
            for(let j = x; j < matrix[i].length; j++) {
                const currentNumber = matrix[i][j];
                const yOffset = Math.abs(y - i);
                const xOffset = Math.abs(x - j);
                const totalDiff = xOffset + yOffset;


                if(totalDiff === 1 && currentNumber === baseNumber) {
                    return true;
                }
            }
        }
        return false;
    }
}

equalNeighbors([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]);