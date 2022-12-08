function centuriesToMinutes(centuryCount) {
    let yearCount = centuryCount * 100;
    let dayCount = Math.floor(yearCount * 365.2422);
    let hourCount = dayCount * 24;
    let minuteCount = hourCount * 60;

    console.log(`${centuryCount} centuries = ${yearCount} years = ${dayCount} days = ${hourCount} hours = ${minuteCount} minutes`);
}