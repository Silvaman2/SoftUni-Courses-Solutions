function vacationBooksList(input) {
    let pageCount = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let days = Number(input[2]);

    let readTime = pageCount / pagePerHour;
    let hoursPerDay = readTime / days;
    console.log(hoursPerDay);
}