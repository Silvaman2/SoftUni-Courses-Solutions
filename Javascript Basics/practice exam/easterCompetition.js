function easterCompetition(input) {
    let index = 0;
    let competitorCount = Number(input[index]);
    index++;

    let bestPoints = 0;
    let bestName;
    for(let i = 0; i < competitorCount; i++) {
        let currentName = input[index];
        let currentPoints = 0;
        index++;
        while(input[index] !== `Stop`) {
            currentPoints += Number(input[index]);
            index++;
        }
        console.log(`${currentName} has ${currentPoints} points.`);
        if(currentPoints > bestPoints) {
            bestPoints = currentPoints;
            bestName = currentName;
            console.log(`${currentName} is the new number 1!`);
        }
        index++;
    }
    console.log(`${bestName} won competition with ${bestPoints} points!`);
}

easterCompetition(["3",

"Chef Manchev",

"10",

"10",

"10",

"10",

"Stop",

"Natalie",

"8",

"2",

"9",

"Stop",

"George",

"9",

"2",

"4",

"2",

"Stop"]);