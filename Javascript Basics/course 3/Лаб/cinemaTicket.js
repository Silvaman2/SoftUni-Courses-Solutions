function cinemaTicket(input) {
    let weekDay = input[0];

    let cost;

    switch(weekDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Friday':
            cost = 12;
            break;
        case 'Wednesday':
        case 'Thursday':
            cost = 14;
            break;
        case 'Saturday':
        case 'Sunday':
            cost = 16;
            break;
    }
    console.log(cost);
}