function specialNumbers(number) {

    for(let i = 1; i <= number; i++) {
        let isSpecial;
        let numString = i.toString();
        let sum = 0;

        for(let i2 = 0; i2 < numString.length; i2++) {
            sum += Number(numString[i2]);
        }
        switch(sum) {
            case 5:
            case 7:
            case 11:
                isSpecial = "True";
                break;
            default:
                isSpecial = "False";
                break;
        }

        console.log(`${i} -> ${isSpecial}`);
    }
}