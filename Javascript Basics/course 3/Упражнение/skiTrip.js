function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let cost;
    let nights = days - 1;
    switch(roomType) {
        case 'room for one person':
            cost = nights * 18;
            break;
        case 'apartment':
            cost = nights * 25;
            if(nights < 10) {
                cost -= cost * 0.3;
            } else if(nights < 15) {
                cost -= cost * 0.35;
            } else {
                cost -= cost * 0.5;
            }
            break;
        case 'president apartment':
            cost = nights * 35;
            if(nights < 10) {
                cost -= cost * 0.1;
            } else if(nights < 15) {
                cost -= cost * 0.15;
            } else {
                cost -= cost * 0.2;
            }
            break;
    }
    if(rating === 'positive') {
        cost += cost * 0.25;
    } else if(rating === 'negative'){
        cost -= cost * 0.1;
    }

    console.log(cost.toFixed(2));
}
