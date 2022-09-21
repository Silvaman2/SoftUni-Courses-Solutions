function everest(input) {
    let index = 0;
    let totalDistance = 5364;
    let days = 1;
    let hasReached = false;
    while(days < 5) {
        let willRest = input[index];
        index++;
        if(willRest === 'Yes') {
            days++;
        }
        let currentDistance = Number(input[index]);
        index++;
        totalDistance += currentDistance;
        if(totalDistance >= 8848) {
            hasReached = true;
            break;
        }
        if(input[index] === 'END') break;
    }

    if(hasReached) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!`);
        console.log(totalDistance);
    }
}


everest(["Yes",
"700",
"END"]);