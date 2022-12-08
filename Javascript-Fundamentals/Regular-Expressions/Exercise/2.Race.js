function race(input) {
    const names = input.shift().split(', ');
    const participants = Object.fromEntries(names.map(a => [a, 0]));

    const namePattern = /[A-Za-z]+/g;
    const distancePattern = /\d/g;

    while(input[0] !== 'end of race') {
        const string = input.shift();
        const currentName = string.match(namePattern).join('');
        const currentDistance = string
        .match(distancePattern)
        .map(Number)
        .reduce((a, b) => a + b);

        if(!participants.hasOwnProperty(currentName)) continue;

        participants[currentName] += currentDistance;
    }

    const sortedParticipants = Object.entries(participants)
    .sort((a, b) => b[1] - a[1]);

    console.log('1st place:', sortedParticipants[0][0]);
    console.log('2nd place:', sortedParticipants[1][0]);
    console.log('3rd place:', sortedParticipants[2][0]);
}


race(['George, Peter, Bill, Tom', 

'G4e@55or%6g6!68e!!@ ', 

'R1@!3a$y4456@', 

'B5@i@#123ll', 

'G@e54o$r6ge#', 

'7P%et^#e5346r', 

'T$o553m&6', 

'end of race']);