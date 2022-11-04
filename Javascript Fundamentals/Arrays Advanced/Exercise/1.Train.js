function train(input) {
    let wagons = input.shift()
    .split(' ')
    .map(Number);

    const wagonCapacity = Number(input.shift());

    for(const commands of input) {
        const [firstCommand, secondCommand] = commands.split(' ');

        if(firstCommand === 'Add') {
            wagons.push(Number(secondCommand));
        } else {
            const wagonIndex = wagons.findIndex(a => a + Number(firstCommand) <= wagonCapacity);
            wagons[wagonIndex] += Number(firstCommand);
        }
    }

    console.log(wagons.join(' '));
}