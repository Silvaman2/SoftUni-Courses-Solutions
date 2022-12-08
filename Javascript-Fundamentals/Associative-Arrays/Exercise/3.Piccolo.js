function piccolo(commands) {
    const cars = new Set();

    for(const command of commands) {
        const [direction, carNumber] = command.split(`, `);

        switch(direction) {
            case `IN`:
                cars.add(carNumber);
                break;
            case `OUT`:
                cars.delete(carNumber);
                break;
        }
    }

    const sortedCars = Array
    .from(cars)
    .sort((a, b) => a.localeCompare(b));


    sortedCars.forEach(a => console.log(a));
    if(!sortedCars.length) {
        console.log(`Parking Lot is Empty`);
    }
}
