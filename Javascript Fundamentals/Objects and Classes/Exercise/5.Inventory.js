function inventory(input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    const heroes = [];

    for(const string of input) {
        const [name, level, items] = string.split(' / ');
        const hero = new Hero(name, level, items);

        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);

    for(const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}