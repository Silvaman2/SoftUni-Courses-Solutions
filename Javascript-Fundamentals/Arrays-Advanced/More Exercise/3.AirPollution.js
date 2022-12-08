function airPollution(airMap, forces) {
    airMap = airMap.map(a => a.split(' ').map(Number));

    for(const command of forces) {
        let [force, number] = command.split(' ');
        number = Number(number);
        applyForces(force, number);
    }

    const pollutedBlocks = [];
    for(let i = 0; i < airMap.length; i++) {
        for(let j = 0; j < airMap[i].length; j++) {
            if(airMap[i][j] >= 50) {
                pollutedBlocks.push(`[${i}-${j}]`);
            }
        }
    }


    if(pollutedBlocks.length) {
        console.log(`Polluted areas: ${pollutedBlocks.join(`, `)}`);
    } else {
        console.log(`No polluted areas`);
    }

    function applyForces(force, number) {
        switch(force) {
            case `breeze`:
                airMap[number] = airMap[number].map(a => a - 15);
                break;
            case `gale`:
                for(let i = 0; i < airMap.length; i++) {
                    airMap[i][number] -= 20;
                }
                break;
            case `smog`:
                airMap = airMap.map(a => a.map(b => b + number));
                break;
        }
        airMap = airMap.map(a => a.map(b => Math.max(0, b)));
    }
}