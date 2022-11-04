function buildAWall(walls) {
    let daysConcreteUsage = [];

    while(!wallsAreBuilt()) {
        let currentConcrete = 0;
        walls = walls.map(a => {
            if(a < 30) {
                currentConcrete += 195;
                a++;
            }
            return a;
        })
        daysConcreteUsage.push(currentConcrete);
    }

    const totalConcrete = daysConcreteUsage.reduce((a, b) => a + b);
    const totalCost = totalConcrete * 1900;

    console.log(daysConcreteUsage.join(', '));
    console.log(`${totalCost} pesos`);

    function wallsAreBuilt() {
        for(const wall of walls) {
            if(wall < 30) return false;
        }
        return true;
    }
}