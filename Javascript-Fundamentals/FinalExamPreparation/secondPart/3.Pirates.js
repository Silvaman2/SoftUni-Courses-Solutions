function pirates(input) {

    const cities = {};

    while(input[0] !== 'Sail') {
        const [name, population, gold] = input.shift().split('||');
        if(cities.hasOwnProperty(name)) {
            cities[name].population += Number(population);
            cities[name].gold += Number(gold);
            continue;
        }
        cities[name] = {
            population:Number(population),
            gold:Number(gold)
        }
    }
    input.shift();

    while(input[0] !== 'End') {
        const stringArray = input.shift().split('=>');
        const command = stringArray.shift();
        const arguments = stringArray;

        if(command === 'Plunder') {
            const [townName, population, gold] = arguments;
            const town = cities[townName];
            town.population -= Number(population);
            town.gold -= Number(gold);

            console.log(`${townName} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if(town.population <= 0 || town.gold <= 0) {
                delete cities[townName];
                console.log(townName, 'has been wiped off the map!');
            }
        } else {
            const [townName, gold] = arguments;
            if(Number(gold) < 0) {
                console.log('Gold added cannot be a negative number!');
                continue;
            }
            cities[townName].gold += Number(gold);

            console.log(`${gold} gold added to the city treasury. ${townName} now has ${cities[townName].gold} gold.`);
        }
    }
    const cityCount = Object.keys(cities).length;

    console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`);

    for(const cityName in cities) {
        const city = cities[cityName];
        console.log(`${cityName} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
    }
}


pirates(["Nassau||95000||1000", 

"San Juan||930000||1250", 

"Campeche||270000||690", 

"Port Royal||320000||1000", 

"Port Royal||100000||2000", 

"Sail", 

"Prosper=>Port Royal=>-200", 

"Plunder=>Nassau=>94000=>750", 

"Plunder=>Nassau=>1000=>150", 

"Plunder=>Campeche=>150000=>690", 

"End"]);