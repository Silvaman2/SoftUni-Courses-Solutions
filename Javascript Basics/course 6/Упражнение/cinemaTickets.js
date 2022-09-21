function cinemaTickets(input) {
    let index = 0;

    let studentTicketsSum = 0;
    let standardTicketsSum = 0;
    let kidsTicketsSum = 0;
    let totalTickets = 0;
    while(index < input.length) {
        if(input[index] === `Finish`) break;
        let currentName = input[index];
        index++;
        let currentSpace = Number(input[index]);
        index++;
        let currentTickets = 0;
        for(let i = 0; i < currentSpace; i++) {
            let ticketType = input[index];
            if(ticketType === `End` || ticketType === `Finish`) {
                index++;
                break;
            }
            totalTickets++;
            currentTickets++;
            switch(ticketType) {
                case `student`:
                    studentTicketsSum++;
                    break;
                case `standard`:
                    standardTicketsSum++;
                    break;
                case `kid`:
                    kidsTicketsSum++;
                    break;
            }
            index++;
        }
        let fullPercentage = (currentTickets / currentSpace) * 100;
        console.log(`${currentName} - ${fullPercentage.toFixed(2)}% full.`);
    }
    let studentPercentage = (studentTicketsSum / totalTickets) * 100;
    let standardPercentage = (standardTicketsSum / totalTickets) * 100;
    let kidsPercentage = (kidsTicketsSum / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercentage.toFixed(2)}% kids tickets.`);
}