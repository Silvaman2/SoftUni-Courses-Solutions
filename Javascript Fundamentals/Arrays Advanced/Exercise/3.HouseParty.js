function houseParty(commands) {
    let guests = [];

    for(const prompt of commands) {
        let command = prompt.split(' ');
        let name = command.shift();

        if(command.includes('not')) {
            remove(name);
        } else {
            add(name);
        }
    }

    for(const guest of guests) {
        console.log(guest);
    }

    function add(name) {
        if(guests.includes(name)) {
            console.log(`${name} is already in the list!`);
        } else {
            guests.push(name);
        }
    }
    function remove(name) {
        if(guests.includes(name)) {
            const index = guests.findIndex(a => a === name);
            guests.splice(index, 1);
        } else {
            console.log(`${name} is not in the list!`);
        }
    }
}