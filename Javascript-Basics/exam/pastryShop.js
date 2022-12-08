function pastryShop(input) {
    let pastry = input[0];
    let count = Number(input[1]);
    let day = Number(input[2]);

    let totalCost;
    switch(pastry) {
        case `Cake`:
            if(day <= 15) {
                totalCost = count * 24;
            } else {
                totalCost = count * 28.7;
            }
            break;
        case `Souffle`:
            if(day <= 15) {
                totalCost = count * 6.66;
            } else {
                totalCost = count * 9.8;
            }
            break;
        case `Baklava`:
            if(day <= 15) {
                totalCost = count * 12.6;
            } else {
                totalCost = count * 16.98;
            }
            break;
    }
    if(day <= 22) {
        if(totalCost >= 100 && totalCost <= 200) {
            totalCost -= totalCost * 0.15;
        } else if(totalCost > 200) {
            totalCost -= totalCost * 0.25;
        }
    }

    if(day <= 15) {
        totalCost -= totalCost * 0.1;
    }

    console.log(totalCost.toFixed(2));
}