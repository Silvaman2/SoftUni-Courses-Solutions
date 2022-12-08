function balls(input) {
    let index = 0;
    let ballCount = Number(input[index]);
    index++;

    let totalPoints = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let other = 0;
    let black = 0;
    for(let i = 0; i < ballCount; i++) {
        let currentColor = input[index];
        switch(currentColor) {
            case 'red':
                red++;
                totalPoints += 5;
                break;
            case 'orange':
                orange++;
                totalPoints += 10;
                break;
            case 'yellow':
                yellow++;
                totalPoints += 15;
                break;
            case 'white':
                white++;
                totalPoints += 20;
                break;
            case 'black':
                black++;
                totalPoints /= 2;
                break;
            default:
                other++;
                break;
        }
        index++;
    }
    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);
}