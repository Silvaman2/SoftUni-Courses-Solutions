function cardGame(input) {
    const players = new Map();

    const powerLetters = {
        "J":11,
        "Q":12,
        "K":13,
        "A":14,
    }
    const types = {
        "S":4,
        "H":3,
        "D":2,
        "C":1,
    }

    for(const command of input) {
        const [name, cards] = command.split(': ');

        if(players.has(name)) {
            for(const card of cards.split(', ')) {
                players.get(name).add(card);
            }
        } else {
            players.set(name, new Set(cards.split(', ')));
        }
    }

    for(const entry of players) {
        const [name, cards] = entry;
        
        const totalValue = Array.from(cards)
        .map(card => getValue(card))
        .reduce((a, b) => a + b);

        console.log(`${name}: ${totalValue}`);
    }




    function getValue(card) {
        const chars = card.split('');
        const type = chars.pop();
        const power = chars.join('');

        const powerNumber = isNaN(power) ? powerLetters[power] : Number(power);
        const typeNumber = types[type];
        const result = powerNumber * typeNumber;

        return result;
    }
}