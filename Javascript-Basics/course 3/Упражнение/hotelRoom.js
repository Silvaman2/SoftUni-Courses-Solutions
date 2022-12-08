function hotelRoom(input) {
    let month = input[0];
    let nightCount = Number(input[1]);

    let studioCost;
    let apartmentCost;
    switch(month) {
        case 'May':
        case 'October':
            studioCost = nightCount * 50;
            apartmentCost = nightCount * 65;
            break;
        case 'June':
        case 'September':
            studioCost = nightCount * 75.2;
            apartmentCost = nightCount * 68.7;
            break;
        case 'July':
        case 'August':
            studioCost = nightCount * 76;
            apartmentCost = nightCount * 77;
            break;
    }
    
    if(month === 'May' || month === 'October') {
        if(nightCount > 14) {
            studioCost -= studioCost * 0.3;
        } else if (nightCount > 7) {
            studioCost -= studioCost * 0.05;
        }
    } else if((month === 'June' || month === 'September') && nightCount > 14) {
        studioCost -= studioCost * 0.2;
    }


    if(nightCount > 14) {
        apartmentCost -= apartmentCost * 0.1;
    }

    console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`);
    console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}