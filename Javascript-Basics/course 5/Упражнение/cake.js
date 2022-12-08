function cake(input) {
    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeHeight = Number(input[index]);
    index++;

    let totalCake = cakeWidth * cakeHeight;
    while(index < input.length) {
        if(input[index] === `STOP`) {
            break;
        }
        let currentSlice = Number(input[index]);
        totalCake -= currentSlice;
        index++;
    }
    let remainder = Math.abs(totalCake);
    
    if(totalCake < 0) {
        console.log(`No more cake left! You need ${remainder} pieces more.`);
    } else {
        console.log(`${remainder} pieces are left.`);
    }
}