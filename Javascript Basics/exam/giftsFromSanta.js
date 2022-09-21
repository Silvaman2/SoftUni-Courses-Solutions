function giftsFromSanta(input) {
    let rangeStart = Number(input[0]);
    let rangeEnd = Number(input[1]);
    let number = Number(input[2]);

    let print = '';
    for(let i = rangeEnd; i >= rangeStart; i--) {
        if(i % 2 === 0 && i % 3 === 0) {
            if(i === number) {
                break;
            }
            print += `${i} `;
        }
    }
    console.log(print);
}