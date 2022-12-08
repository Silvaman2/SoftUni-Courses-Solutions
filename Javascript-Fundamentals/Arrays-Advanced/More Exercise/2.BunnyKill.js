function bunnyKill(input) {
    const bombs = input
    .pop()
    .split(' ')
    .map(a => a.split(',').map(Number));

    const cells = input.map(a => a.split(' ').map(Number));

    let snowballDamage = 0;
    let snowballKills = 0;

    for(const bombCell of bombs) {
        const [y, x] = bombCell;
        const bombDamage = cells[y][x];
        if(bombDamage === 0) continue;

        snowballDamage += bombDamage;
        snowballKills++;

        cells[y][x] = 0;
        for(let i = 0; i < cells.length; i++) {
            for(let j = 0; j < cells[i].length; j++) {
                const xOffset = Math.abs(x - j);
                const yOffset = Math.abs(y - i);

                if(Math.max(xOffset, yOffset) === 1) {
                    cells[i][j] = Math.max(0, cells[i][j] - bombDamage);
                }
            }
        }
    }

    snowballDamage += cells
    .map(a => a.reduce((b, c) => b + c))
    .reduce((a, b) => a + b);
    snowballKills += cells
    .map(a => a.filter(b => b > 0).length)
    .reduce((a, b) => a + b);

    console.log(snowballDamage);
    console.log(snowballKills);
}







bunnyKill(['5 10 15 20',

'10 10 10 10',

'10 15 10 10',

'10 10 10 10',

'2,2 0,1']);