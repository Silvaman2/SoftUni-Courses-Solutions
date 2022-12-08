function matchDates([string]) {
    const datePattern = /\b(?<day>\d{2})([.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    const dates = string.matchAll(datePattern);

    for(const date of dates) {
        const day = date.groups.day;
        const month = date.groups.month;
        const year = date.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);