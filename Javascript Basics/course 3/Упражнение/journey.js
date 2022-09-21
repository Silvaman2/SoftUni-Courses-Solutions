function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let sum;
    let destination;
    let tripType;


    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            sum = budget * 0.3;
            tripType = 'Camp';
        } else {
            sum = budget * 0.7;
            tripType = 'Hotel';
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            sum = budget * 0.4;
            tripType = 'Camp';
        } else {
            sum = budget * 0.8;
            tripType = 'Hotel';
        }
    } else {
        destination = 'Europe';
        sum = budget * 0.9;
        tripType = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${tripType} - ${sum.toFixed(2)}`);
}
