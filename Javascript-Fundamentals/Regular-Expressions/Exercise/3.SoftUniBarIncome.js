function softUniBarIncome(input) {
    const pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d\.]+)\$/;

    let totalCost = 0;

    while(input[0] !== 'end of shift') {
        const string = input.shift();
        const match = string.match(pattern);

        if(!match) continue;

        const { name, product, count, price } = match.groups;
        const currentCost = Number(price) * Number(count);
        totalCost += currentCost;

        console.log(`${name}: ${product} - ${currentCost.toFixed(2)}`);
    }

    console.log('Total income:', totalCost.toFixed(2));
}


softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$', 

'%Peter%<Gum>1.3$', 

'%Maria%<Cola>|1|2.4', 

'%Valid%<Valid>valid|10|valid20$', 

'end of shift']);