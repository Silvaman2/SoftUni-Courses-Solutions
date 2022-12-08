function pointsValidation(input) {
    let firstPoint = [input[0], input[1]];
    let secondPoint = [input[2], input[3]];

    isValidCheck(firstPoint, [0, 0]);
    isValidCheck(secondPoint, [0, 0]);
    isValidCheck(firstPoint, secondPoint);
    


    function isValidCheck(firstPosition, secondPosition) {
        let distance = distanceBetween(firstPosition, secondPosition);
        let isValid = distance === Math.round(distance);
        
        console.log(`{${firstPosition.join(', ')}} to {${secondPosition.join(', ')}} is ${isValid ? `valid` : `invalid`}`);
    }

    

    function distanceBetween(firstPosition, secondPosition) {
        let result = Math.sqrt(Math.pow(firstPosition[0] - secondPosition[0], 2) + Math.pow(firstPosition[1] - secondPosition[1], 2));
        
        return result;
    }
}