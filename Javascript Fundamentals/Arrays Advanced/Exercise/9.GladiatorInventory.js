function gladiatorInventory(input) {
    let equipment = input.shift().split(' ');

    for(const string of input) {
        const [command, item] = string.split(' ');

        switch(command) {
            case `Buy`:
                buy(item);
                break;
            case `Trash`:
                trash(item);
                break;
            case `Repair`:
                repair(item);
                break;
            case `Upgrade`:
                upgrade(item);
                break;
        }
    }

    console.log(equipment.join(' '));

    function buy(item) {
        if(!equipment.includes(item)) {
            equipment.push(item);
        }
    }
    function trash(item) {
        if(equipment.includes(item)) {
            equipment.splice(equipment.indexOf(item), 1);
        }
    }
    function repair(item) {
        if(equipment.includes(item)) {
            equipment.splice(equipment.indexOf(item), 1);
            equipment.push(item);
        }
    }
    function upgrade(item) {
        const [baseItem, upgrade] = item.split('-');
        if(equipment.includes(baseItem)) {
            const upgradedItem = `${baseItem}:${upgrade}`;
            equipment.splice(equipment.indexOf(baseItem) + 1, 0, upgradedItem);
        }
    }
}


gladiatorInventory(['SWORD Shield Spear',

'Buy Bag',

'Trash Shield',

'Repair Spear',

'Upgrade SWORD-Steel']);