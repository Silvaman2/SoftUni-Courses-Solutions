function histogram(input) {
    let length = Number(input[0])

    let p = [0, 0, 0, 0, 0];
    for (let i = 1; i <= length; i++) {
        input[i] = Number(input[i]);
        if (input[i] < 200) {
            p[0]++;
        } else if (input[i] < 400) {
            p[1]++;
        } else if (input[i] < 600) {
            p[2]++;
        } else if (input[i] < 800) {
            p[3]++;
        } else {
            p[4]++;
        }
    }
    for (let i = 0; i < p.length; i++) {
        p[i] = (p[i] / length) * 100;
        console.log(`${p[i].toFixed(2)}%`);
    }
}

