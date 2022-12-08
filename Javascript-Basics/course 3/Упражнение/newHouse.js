function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);


    let finalCost;

    switch(flowerType) {
        case 'Roses':
            finalCost = flowerCount * 5;
            if(flowerCount > 80) {
                finalCost -= finalCost * 0.1;
            }
            break;
        case 'Dahlias':
            finalCost = flowerCount * 3.8;
            if(flowerCount > 90) {
                finalCost -= finalCost * 0.15;
            }
            break;
        case 'Tulips':
            finalCost = flowerCount * 2.8;
            if(flowerCount > 80) {
                finalCost -= finalCost * 0.15;
            }
            break;
        case 'Narcissus':
            finalCost = flowerCount * 3;
            if(flowerCount < 120) {
                finalCost += finalCost * 0.15;
            }
            break;
        case 'Gladiolus':
            finalCost = flowerCount * 2.5;
            if(flowerCount < 80) {
                finalCost += finalCost * 0.2;
            }
            break;
    }

    let diff = Math.abs(budget - finalCost);

    if(budget >= finalCost) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}