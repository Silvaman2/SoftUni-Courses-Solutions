function building(input) {
    let floorCount = Number(input[0]);
    let apartmentPerFloor = Number(input[1]);


    for(let f = floorCount; f > 0; f--) {
        let currentApartments = ``;
        for(let r = 0; r < apartmentPerFloor; r++) {
            if(f === floorCount) {
                currentApartments += `L${f}${r} `;
            } else if(f % 2 !== 0) {
                currentApartments += `A${f}${r} `;
            } else {
                currentApartments += `O${f}${r} `;
            }
        }
        console.log(currentApartments);
    }
}