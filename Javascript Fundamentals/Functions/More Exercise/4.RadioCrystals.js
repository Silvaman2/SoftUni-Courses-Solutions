function radioCrystals(input) {
    let targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentCrystal = input[i];
        console.log(`Processing chunk ${currentCrystal} microns`);
        currentCrystal = processCrystal(currentCrystal, targetThickness);
        console.log(`Finished crystal ${currentCrystal} microns`);
    }


    function processCrystal(crystal, target) {
        let cut = a => a / 4;
        let lap = a => a * 0.8;
        let grind = a => a - 20;
        let etch = a => a - 2;
        let xRay = a => a + 1;

        let count = 0;

        while (crystal != target) {

            while(cut(crystal) >= target) {
                crystal = cut(crystal);
                count++;
            }

            if(count > 0) {
                console.log(`Cut x${count}`);
                crystal = tranportAndWash(crystal);
                count = 0;
            }
            while(lap(crystal) >= target) {
                crystal = lap(crystal);
                count++;
            }

            if(count > 0) {
                console.log(`Lap x${count}`);
                crystal = tranportAndWash(crystal);
                count = 0;
            }
            while(grind(crystal) >= target) {
                crystal = grind(crystal);
                count++;
            }

            if(count > 0) {
                console.log(`Grind x${count}`);
                crystal = tranportAndWash(crystal);
                count = 0;
            }
            while(etch(crystal) >= target - 1) {
                crystal = etch(crystal);
                count++;
            }

            if(count > 0) {
                console.log(`Etch x${count}`);
                crystal = tranportAndWash(crystal);
                count = 0;
            }
            while(crystal < target) {
                crystal = xRay(crystal);
                count++;
            }

            if(count > 0) {
                console.log(`X-ray x${count}`);
                if(crystal !== target) {
                    crystal = tranportAndWash(crystal);
                }
                count = 0;
            }
        }
        return crystal;
    }


    function tranportAndWash(crystal) {
        console.log(`Transporting and washing`);
        return Math.floor(crystal);
    }
}