function requiredReading(pageCount, pagesPerHour, dayCount) {
    let totalHours = pageCount / pagesPerHour;
    let hoursPerDay = totalHours / dayCount;

    console.log(hoursPerDay);
}