function starEnigma(input) {
    input.shift();
    const pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<planetPopulation>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/;

    const planets = [];
    for(const encryptedMessage of input) {
        const decryptedMessage = decrypt(encryptedMessage);

        if(!pattern.test(decryptedMessage)) continue;
        const planet = decryptedMessage.match(pattern).groups;
        planets.push(planet);
    }
    planets.sort((a, b) => a.planetName.localeCompare(b.planetName));

    const attackedPlanets = planets.filter(planet => planet.attackType === 'A');
    const destroyedPlanets = planets.filter(planet => planet.attackType === 'D');

    console.log('Attacked planets:', attackedPlanets.length);
    for(const planet of attackedPlanets) {
        console.log('->', planet.planetName);
    }


    console.log('Destroyed planets:', destroyedPlanets.length);
    for(const planet of destroyedPlanets) {
        console.log('->', planet.planetName);
    }


    function decrypt(message) {

        let starCount = 0;
        const starPattern = /[star]/ig;

        while(starPattern.exec(message)) starCount++;

        const decryptedMessage = message
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) - starCount))
        .join('');

        return decryptedMessage;
    }
}


starEnigma(['2', 

'STCDoghudd4=63333$D$0A53333', 

'EHfsytsnhf?8555&I&2C9555SR']);