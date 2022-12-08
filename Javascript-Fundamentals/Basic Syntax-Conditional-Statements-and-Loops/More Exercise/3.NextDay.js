function NextDay(year, month, day) {
    let nextDate = new Date(year, month-1, day+1);
    let nextYear = nextDate.getFullYear();
    let nextMonth = nextDate.getMonth()+1;
    let nextDay = nextDate.getDate();

    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}
