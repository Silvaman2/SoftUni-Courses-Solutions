function ladybugs(array) {
    let fieldSize = array[0];
    let initialIndexes = array[1].split(' ');
    let ladybugField = [];

    for(let i = 0; i < fieldSize; i++) {
        if(initialIndexes.includes(i.toString())) {
            ladybugField[i] = 1;
        } else {
            ladybugField[i] = 0;
        }
    }

    for(let i = 2; i < array.length; i++) {
        let currentCommand = array[i].split(' ');
        let currentIndex = Number(currentCommand[0]);
        let currentDirection = currentCommand[1];
        let currentDistance = Number(currentCommand[2]);

        if(currentIndex >= ladybugField.length || ladybugField[currentIndex] === 0) {
            continue;
        }

        ladybugField[currentIndex] = 0;

        let targetIndex;

        switch(currentDirection) {
            case `left`:
                currentDistance *= -1;
                break;
            case `right`:
                currentDistance *= 1;
                break;
        }
        targetIndex = currentIndex + currentDistance;

        let ladybugTravelling = true;

        while(ladybugTravelling) {
            switch(ladybugField[targetIndex]) {
                case 1:
                    targetIndex += currentDistance;
                    break;
                case 0:
                    ladybugField[targetIndex] = 1;
                default:
                    ladybugTravelling = false;
                    break;
            }
        }
        
    }

    console.log(ladybugField.join(' '));
}


ladybugs([ 3, '0 1',

'0 right 1',

'2 right 1' ]);