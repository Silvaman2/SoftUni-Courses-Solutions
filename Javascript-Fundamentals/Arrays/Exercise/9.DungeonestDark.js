function dungeonestDark(dungeonRooms) {
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let isAlive = true;
    let roomArray = dungeonRooms[0].split('|');

    for(room of roomArray) {
        room = room.split(' ');
        let roomType = room[0];
        let roomNumber = Number(room[1]);
        bestRoom++;

        switch(roomType) {
            case 'potion':
                let initialHealth = health;
                health += roomNumber;
                health = Math.min(health, 100);

                let healedAmount = health - initialHealth;

                console.log(`You healed for ${healedAmount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            
            case 'chest':
                let coinsFound = roomNumber;
                coins += coinsFound;

                console.log(`You found ${coinsFound} coins.`);
                break;
            
            default:
                let monsterName = roomType;
                let monsterDamage = roomNumber;
                
                health -= monsterDamage;

                isAlive = health > 0;

                if(isAlive) {
                    console.log(`You slayed ${monsterName}.`);
                } else {
                    console.log(`You died! Killed by ${monsterName}.`);
                    console.log(`Best room: ${bestRoom}`);
                }
                break;
        }
        if(!isAlive) {
            break;
        }
    }

    if(isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}