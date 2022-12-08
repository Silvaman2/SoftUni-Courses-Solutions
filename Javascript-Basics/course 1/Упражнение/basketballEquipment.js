function basketballEquipment(input) {
    let annualTax = Number(input[0]);

    let shoeCost = annualTax * 0.6;
    let teamCost = shoeCost * 0.8;
    let ballCost = teamCost / 4;
    let accessoryCost = ballCost / 5;

    let totalCost = annualTax + shoeCost + teamCost + ballCost + accessoryCost;
    console.log(totalCost);
}

basketballEquipment(['550']);