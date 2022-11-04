function spaceTravel(input) {
    const commands = input.shift().split('||');
    let fuel = input.shift();
    let ammo = input.shift();

    for (const prompt of commands) {
        let [command, number] = prompt.split(' ');
        number = Number(number);

        switch (command) {
            case `Travel`:
                const lightYears = number;
                fuel -= lightYears;
                if (fuel >= 0) {
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                }
                break;
            case `Enemy`:
                const enemyArmor = number;
                if (ammo >= enemyArmor) {
                    ammo -= enemyArmor;
                    console.log(`An enemy with ${enemyArmor} armour is defeated.`);
                } else {
                    fuel -= enemyArmor * 2;
                    if (fuel >= 0) {
                        console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
                    }
                }
                break;
            case `Repair`:
                const currentFuel = number;
                const currentAmmo = number * 2;

                fuel += currentFuel;
                ammo += currentAmmo;

                console.log(`Ammunitions added: ${currentAmmo}.`);
                console.log(`Fuel added: ${currentFuel}.`);
                break;
        }

        if(fuel < 0) {
            return `Mission failed.`;
        }
    }

    return `You have reached Titan, all passengers are safe.`;
}