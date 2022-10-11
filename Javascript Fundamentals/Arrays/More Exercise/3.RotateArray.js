function rotateArray(stringArray) {
    let rotations = Number(stringArray[stringArray.length - 1]);
    let rotationArray = stringArray.slice(0, stringArray.length - 1);

    for(let i = 0; i < rotations; i++) {
        let lastElement = rotationArray[rotationArray.length - 1];
        let result = [lastElement];

        for(let j = 0; j < rotationArray.length - 1; j++) {
            result.push(rotationArray[j]);
        }

        rotationArray = result;
    }


    console.log(rotationArray.join(' '));
}