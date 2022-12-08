function moving(input) {
    let index = 0;
    let roomWidth = Number(input[index]);
    index++;
    let roomLength = Number(input[index]);
    index++;
    let roomHeight = Number(input[index]);
    index++;

    let roomSpace = roomWidth * roomLength * roomHeight;
    while(index < input.length) {
        if(input[index] === `Done`) {
            break;
        }
        let boxSpace = Number(input[index]);
        roomSpace -= boxSpace;
        index++;
    }
    let remainder = Math.abs(roomSpace);

    if(roomSpace < 0) {
        console.log(`No more free space! You need ${remainder} Cubic meters more.`);
    } else {
        console.log(`${remainder} Cubic meters left.`);
    }
}