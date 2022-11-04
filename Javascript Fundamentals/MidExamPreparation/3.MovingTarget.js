function movingTarget(input) {
    let targets = input.shift()
        .split(' ')
        .map(Number);
    
    for(const string of input) {
        let [command, index, number] = string.split(' ');
        index = Number(index);
        number = Number(number);

        switch(command) {
            case `Shoot`:
                shoot(index, number);
                break;
            case `Add`:
                add(index, number);
                break;
            case `Strike`:
                strike(index, number);
                break;
        }
        targets = targets.filter(a => a > 0);
    }

    console.log(targets.join('|'));

    function shoot(index, power) {
        if(targets[index]) {
            targets[index] -= power;
        }
    }
    function add(index, value) {
        if(targets[index]) {
            targets.splice(index, 0, value);
            return;
        }
        console.log(`Invalid placement!`);
    }
    function strike(index, radius) {
        const leftRadius = index - radius;
        const rightRadius = index + radius;

        if(targets[leftRadius] && targets[rightRadius]) {
            targets.splice(leftRadius, radius * 2 + 1);
            return;
        }
        console.log(`Strike missed!`);
    }
}

movingTarget([`52 74 23 44 96 110`,

`Shoot 5 10`,

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"]);