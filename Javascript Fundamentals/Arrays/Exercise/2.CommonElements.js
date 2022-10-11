function commonElements(firstArray, secondArray) {
    for(let element of firstArray) {
        for(secondElement of secondArray) {
            if(element === secondElement) {
                console.log(element);
            }
        }
    }
}