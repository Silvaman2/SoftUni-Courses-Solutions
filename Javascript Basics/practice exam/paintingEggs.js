function paintingEggs(input) {
    let size = input[0];
    let color = input[1];
    let amount = Number(input[2]);

    let pricePerEgg;
            switch(color) {
                case 'Red':
                    if(size === 'Large') {
                        pricePerEgg = 16;
                    } else if(size === 'Medium') {
                        pricePerEgg = 13;
                    } else if(size === 'Small') {
                        pricePerEgg = 9;
                    }
                    break;
                case 'Green':
                    if(size === 'Large') {
                        pricePerEgg = 12;
                    } else if(size === 'Medium') {
                        pricePerEgg = 9;
                    } else if(size === 'Small') {
                        pricePerEgg = 8;
                    }
                    break;
                case 'Yellow':
                    if(size === 'Large') {
                        pricePerEgg = 9;
                    } else if(size === 'Medium') {
                        pricePerEgg = 7;
                    } else if(size === 'Small') {
                        pricePerEgg = 5;
                    }
                    break;
            }
    let totalCost = pricePerEgg * amount;
    let finalCost = totalCost - (totalCost * 0.35);
    console.log(`${finalCost.toFixed(2)} leva.`);
}