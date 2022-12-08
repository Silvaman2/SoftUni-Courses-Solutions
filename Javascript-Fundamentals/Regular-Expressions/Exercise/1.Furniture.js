function furnitureMatch(input) {
    const pattern = /[>]{2}(?<name>[A-Z][A-Za-z]+)[<]{2}(?<price>\d+[\.]?\d+)!(?<quantity>\d+)/;

    const allFurniture = [];
    let totalCost = 0;

    for(const string of input) {
        const match = string.match(pattern);
        if(!match) continue;

        const name = match.groups.name;
        const price = Number(match.groups.price);
        const quantity = Number(match.groups.quantity);
        const currentCost = price * quantity;
        allFurniture.push(name);
        totalCost += currentCost;
    }

    console.log('Bought furniture:');
    for(const furniture of allFurniture) {
        console.log(furniture);
    }

    console.log('Total money spend:', totalCost.toFixed(2));
}

furnitureMatch(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase']);