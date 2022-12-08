function equalNeighbors(matrix) {
    let matchCount = 0;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            hasEqual(j, i);
        }
    }
    matchCount /= 2;

    console.log(matchCount);

    function hasEqual(x, y) {
        const baseNumber = matrix[y][x];
        
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                const currentNumber = matrix[i][j];
                const yOffset = Math.abs(y - i);
                const xOffset = Math.abs(x - j);
                const totalDiff = xOffset + yOffset;


                if(totalDiff === 1 && currentNumber === baseNumber) {
                   matchCount++;
                }
            }
        }
    }
}