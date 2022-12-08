function Vacation(groupSize, groupType, day) {
    let price;
    let totalPrice;
    switch(groupType) {
        case `Students`:
            if(day === `Friday`) {
                price = 8.45;
            } else if(day === `Saturday`) {
                price = 9.8;
            } else if(day === `Sunday`) {
                price = 10.46;
            }
            if(groupSize >= 30) {
                price -= price * 0.15;
            }
            break;
        case `Business`:
            if(day === `Friday`) {
                price = 10.9;
            } else if(day === `Saturday`) {
                price = 15.6;
            } else if(day === `Sunday`) {
                price = 16;
            }
            if(groupSize >= 100) {
                groupSize-= 10;
            }
            break;
        case `Regular`:
            if(day === `Friday`) {
                price = 15;
            } else if(day === `Saturday`) {
                price = 20;
            } else if(day === `Sunday`) {
                price = 22.5;
            }
            if(groupSize >= 10 && groupSize <= 20) {
                price -= price * 0.05;
            }
            break;
    }
    totalPrice = price * groupSize;
    

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}