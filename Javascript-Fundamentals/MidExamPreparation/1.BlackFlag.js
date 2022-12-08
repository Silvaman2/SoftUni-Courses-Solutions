function blackFlag(input) {
    const days = Number(input[0]);
    const gainPerDay = Number(input[1]);
    const target = Number(input[2]);
    let totalPlunder = 0;

    for(let i = 1; i <= days; i++) {
        totalPlunder += gainPerDay;
        if(i % 3 === 0) {
            totalPlunder += gainPerDay * 0.5;
        }
        if(i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }
    const percentage = totalPlunder / (target / 100);

    if(totalPlunder >= target) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}