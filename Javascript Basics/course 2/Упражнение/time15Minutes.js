function time15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;
    if(minutes > 59) {
        hours++;
        minutes -= 60;
    }
    if(hours > 23) {
        hours -= 24;
    }

    if(minutes / 10 < 1) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}