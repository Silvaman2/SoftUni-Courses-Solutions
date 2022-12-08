function printMeetings(input) {
    const meetings = {};

    for(const string of input) {
        const [weekday, name] = string.split(' ');

        if(!meetings[weekday]) {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for(const weekday in meetings) {
        console.log(`${weekday} -> ${meetings[weekday]}`);
    }
}