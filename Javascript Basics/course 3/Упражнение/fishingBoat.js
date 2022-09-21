function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = input[2];

    let sum;

    switch(season) {
        case 'Spring':
            sum = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            sum = 4200;
            break;
        case 'Winter':
            sum = 2600;
            break;
    }
    if(fisherCount <= 6) {
        sum -= sum * 0.1;
    } else if(fisherCount <= 11) {
        sum -= sum * 0.15;
    } else {
        sum -= sum * 0.25;
    }
    if(fisherCount % 2 == 0 && season != 'Autumn') {
        sum -= sum * 0.05;
    }
    let diff = Math.abs(budget - sum);

    if(budget >= sum) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}