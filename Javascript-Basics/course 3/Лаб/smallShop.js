function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);

    let cost;

    if(city === 'Sofia') {
        switch(product) {
            case 'coffee':
                cost = 0.5 * amount;
                break;
            case 'water':
                cost = 0.8 * amount;
                break;
            case 'beer':
                cost = 1.2 * amount;
                break;
            case 'sweets':
                cost = 1.45 * amount;
                break;
            case 'peanuts':
                cost = 1.6 * amount;
                break;
        }
    } else if(city === 'Plovdiv') {
        switch(product) {
            case 'coffee':
                cost = 0.4 * amount;
                break;
            case 'water':
                cost = 0.7 * amount;
                break;
            case 'beer':
                cost = 1.15 * amount;
                break;
            case 'sweets':
                cost = 1.3 * amount;
                break;
            case 'peanuts':
                cost = 1.5 * amount;
                break;
        }
    } else if(city === 'Varna') {
        switch(product) {
            case 'coffee':
                cost = 0.45 * amount;
                break;
            case 'water':
                cost = 0.7 * amount;
                break;
            case 'beer':
                cost = 1.1 * amount;
                break;
            case 'sweets':
                cost = 1.35 * amount;
                break;
            case 'peanuts':
                cost = 1.55 * amount;
                break;
        }
    }
    console.log(cost);
}

smallShop([`peanuts`,`Plovdiv`,1]);