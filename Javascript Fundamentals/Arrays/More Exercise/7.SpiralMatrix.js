function spiralMatrix(x, y) {
    let count = 1;
    let matrix = [];
    let col = 0;
    let row = 0;
    let colEnd = x - 1;
    let rowEnd = y - 1;

    for(let i = 0; i < y; i++) {
        matrix.push([]);
    }

    while(row <= rowEnd && col <= colEnd) {
        for(let i = col; i <= colEnd; i++) {
            matrix[row][i] = count;
            count++;
        }
        row++;

        for(let i = row; i <= rowEnd; i++) {
            matrix[i][colEnd] = count;
            count++;
        }
        colEnd--;

        for(let i = colEnd; i >= col; i--) {
            matrix[rowEnd][i] = count;
            count++;
        }
        rowEnd--;

        for(let i = rowEnd; i >= row; i--) {
            matrix[i][col] = count;
            count++;
        }
        col++;

    }


    for(let i = 0; i < x; i++) {
        console.log(matrix[i].join(' '));
    }
}