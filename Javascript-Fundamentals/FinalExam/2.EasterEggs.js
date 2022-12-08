function easterEggs([string]) {
    const pattern = /[@#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z0-9]*\/+(?<amount>\d+)\/+/g;

    let currentMatch;
    while(currentMatch = pattern.exec(string)) {
        const { color, amount } = currentMatch.groups;
        console.log(`You found ${amount} ${color} eggs!`);
    }
}

easterEggs(['@@@@green@*/10/@ye10w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);