function fruitShop(input) {
    let fruit = input[0];
    let weekDay = input[1];
    let amount = Number(input[2]);

    let cost;
    let err = false;

    switch(weekDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch(fruit) {
                case 'banana':
                    cost = 2.5 * amount;
                    break;
                case 'apple':
                    cost = 1.2 * amount;
                    break;
                case 'orange':
                    cost = 0.85 * amount;
                    break;
                case 'grapefruit':
                    cost = 1.45 * amount;
                    break;
                case 'kiwi':
                    cost = 2.7 * amount;
                    break;
                case 'pineapple':
                    cost = 5.5 * amount;
                    break;
                case 'grapes':
                    cost = 3.85 * amount;
                    break;
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch(fruit) {
                case 'banana':
                    cost = 2.7 * amount;
                    break;
                case 'apple':
                    cost = 1.25 * amount;
                    break;
                case 'orange':
                    cost = 0.9 * amount;
                    break;
                case 'grapefruit':
                    cost = 1.6 * amount;
                    break;
                case 'kiwi':
                    cost = 3 * amount;
                    break;
                case 'pineapple':
                    cost = 5.6 * amount;
                    break;
                case 'grapes':
                    cost = 4.2 * amount;
                    break;
            }
            break;
    }
    
    if(cost) {
        console.log(cost.toFixed(2));
    } else {
        console.log('error');
    }
}