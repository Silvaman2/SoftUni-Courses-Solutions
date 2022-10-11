function dayOfWeek(dayIndex) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(dayIndex > 0 && dayIndex <= 7) {
        console.log(weekDays[dayIndex - 1]);
    } else {
        console.log('Invalid day!');
    }
}