function chessBoard(number) {
    console.log(`<div class="chessboard">`);

    for(let column = 0; column < number; column++) {
        console.log(`  <div>`);
        let index = column;

        for(let row = 0; row < number; row++) {
            console.log(`    <span class="${index % 2 == 0 ? 'black' : 'white'}"></span>`);
            index++;
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}