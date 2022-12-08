function garage(input) {
    const garages = new Map();

    for(const string of input) {
        const [garageNumber, carString] = string.split(' - ');
        const carEntries = carString
        .split(`, `)
        .map(entry => entry.split(`: `));
        const carObject = Object.fromEntries(carEntries);

        if(garages.has(garageNumber)) {
            garages.get(garageNumber).add(carObject);
        } else {
            garages.set(garageNumber, new Set([carObject]));
        }
    }


    for(const [garageNumber, cars] of garages) {
        console.log(`Garage № ${garageNumber}`);

        for(const car of cars) {
            const propertiesString = Object
            .entries(car)
            .map(entry => entry.join(` - `))
            .join(`, `);

            console.log(`---`, propertiesString);
        }
    }
}