function spaceShip(input) {
    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let averageHeight = Number(input[3]);

    let shipVolume = shipWidth * shipLength * shipHeight;
    let roomVolume = (averageHeight + 0.4) * 2 * 2;
    let crewCount = Math.floor(shipVolume / roomVolume);

    if(crewCount < 3) {
        console.log(`The spacecraft is too small.`);
    } else if(crewCount > 10) {
        console.log(`The spacecraft is too big.`);
    } else {
        console.log(`The spacecraft holds ${crewCount} astronauts.`);
    }
}