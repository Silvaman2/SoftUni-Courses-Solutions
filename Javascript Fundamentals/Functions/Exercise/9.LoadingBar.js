function loadingBar(percentage) {
    let loadBar = loadingArray(percentage);
    if(percentage < 100) {
        console.log(`${percentage}% [${loadBar.join('')}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% complete!`);
        console.log(`[%%%%%%%%%%]`);
    }


    function loadingArray(percentage) {
        let array = [];
        for(let i = 0; i < 10; i++) {
            if(i < percentage / 10) {
                array.push(`%`);
            } else {
                array.push(`.`);
            }
        }
        return array;
    }
}