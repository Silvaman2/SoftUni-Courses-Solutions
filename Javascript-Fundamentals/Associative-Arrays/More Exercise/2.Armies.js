function armies(input) {
    const leaders = new Map();

    for(const string of input) {
        if(string.includes('arrives')) {
            const stringArray = string.split(' ');
            stringArray.pop();

            const leaderName = stringArray.join(' ');

            leaders.set(leaderName, new Map());
        } else if(string.includes(':')) {
            const [[leaderName], [armyName, armyCount]] = string
            .split(': ')
            .map(element => element.split(', '));


            if(!leaders.has(leaderName)) continue;

            leaders.get(leaderName).set(armyName, Number(armyCount));
        } else if(string.includes('+')) {
            const [armyName, armyCount] = string.split(' + ');
            const currentLeader = Array.from(leaders.values())
            .find(leader => leader.has(armyName));

            if(!currentLeader) continue;
            const currentArmyCount = currentLeader.get(armyName);
            currentLeader.set(armyName, currentArmyCount + Number(armyCount));
        } else {
            const stringArray = string.split(' ');
            stringArray.pop();
            const leaderName = stringArray.join(' ');
            leaders.delete(leaderName);
        }
    }
    
    const sortedLeaders = Array.from(leaders.entries())
    .sort((a, b) => totalArmyCount(b[1]) - totalArmyCount(a[1]))
    .map(([leaderName, armies]) => {
        const sortedArmies = Array.from(armies)
        .sort((a, b) => b[1] - a[1]);

        return [leaderName, sortedArmies];
    });


    for(const [leaderName, armies] of sortedLeaders) {
        console.log(`${leaderName}: ${totalArmyCount(armies)}`);

        for(const [armyName, armyCount] of armies) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }



    function totalArmyCount(leader) {
        const armies = Array.from(leader);
        if(!armies.length) return 0;
        return Array.from(leader)
        .map(a => a[1])
        .reduce((a, b) => a + b);
    }
}


armies(['Rick Burr arrives', 
'Findlay arrives', 
'Rick Burr: Juard, 1500',
'Wexamp arrives',
'Findlay: Wexamp, 34540',
'Wexamp + 340',
'Wexamp: Britox, 1155',
'Wexamp: Juard, 43423']);