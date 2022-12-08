function plantDiscovery(input) {
    const plantCount = input.shift();

    const plants = {};

    for(let i = 0; i < plantCount; i++) {
        const [plant, rarity] = input.shift().split('<->');
        plants[plant] = {
            rarity:Number(rarity),
            ratings:[]
        };
    }

    while(input[0] !== 'Exhibition') {
        const [[command], [plant, param]] = input.shift()
            .split(': ')
            .map(a => a.split(' - '));
        
        if(!plants.hasOwnProperty(plant)) {
            console.log('error');
            continue;
        }
        switch(command) {
            case 'Rate':
                const rating = Number(param);
                plants[plant].ratings.push(rating);
            break;
            case 'Update':
                const rarity = Number(param);
                plants[plant].rarity = rarity;
            break;
            case 'Reset':
                plants[plant].ratings = [];
            break;
        }
    }
    console.log('Plants for the exhibition:');
    for(const plantName in plants) {
        const plant = plants[plantName];
        const average = plant.ratings.length ? plant.ratings.reduce((a, b) => a + b) / plant.ratings.length : 0;

        console.log(`- ${plantName}; Rarity: ${plant.rarity}; Rating: ${average.toFixed(2)}`);
    }
}


plantDiscovery(["3", 

"Arnoldii<->4", 

"Woodii<->7", 

"Welwitschia<->2", 

"Rate: Woodii - 10", 

"Rate: Welwitschia - 7", 

"Rate: Arnoldii - 3", 

"Rate: Woodii - 5", 

"Update: Woodii - 5", 

"Reset: Arnoldii", 

"Exhibition"]); 