function cleverLily(input) {
    let age = Number(input[0]);
    let laundryCost = Number(input[1]);
    let toyCost = Number(input[2]);

    let money = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += (i / 2) * 10;
            money--;
        } else {
            money += toyCost;
        }
    }

    let diff = Math.abs(laundryCost - money);
    if (money >= laundryCost) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}