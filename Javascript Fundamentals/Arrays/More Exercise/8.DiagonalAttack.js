function diagonalAttack(matrix) {
    let firstSum = 0;
    let secondSum = 0;
    let equalMatrix = [];

    for(let stringIndex = 0; stringIndex < matrix.length; stringIndex++) {
        equalMatrix.push([]);
        matrix[stringIndex] = matrix[stringIndex].split(' ');
        for(let numberIndex = 0; numberIndex < matrix[stringIndex].length; numberIndex++) {
            matrix[stringIndex][numberIndex] = Number(matrix[stringIndex][numberIndex]);
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        let firstDiagIndex = matrix[i][i];
        let secondDiagIndex = matrix[i][matrix.length - 1 - i];

        firstSum += firstDiagIndex;
        secondSum += secondDiagIndex;
    }
    let areEqual = firstSum === secondSum;



    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            let isDiagonal = j === i || j === matrix.length - 1 - i;

            if(isDiagonal) {
                equalMatrix[i][j] = matrix[i][j];
            } else {
                equalMatrix[i][j] = firstSum;
            }
        }
    }


    if(areEqual) {
        for(let array of equalMatrix) {
            console.log(array.join(' '));
        }
    } else {
        for(let array of matrix) {
            console.log(array.join(' '));
        }
    }
}