function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];

    for(let i = 0; i < width; i++) {
        
        matrix.push([]);
        for(let j = 0; j < height; j++) {
            let xOffset = Math.abs(i - x);
            let yOffset = Math.abs(j - y);

            matrix[i][j] = Math.max(xOffset,yOffset) + 1;
        }
        console.log(matrix[i].join(' '));
    }
}