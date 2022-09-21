function careOfPuppy(input) {
    let index = 0;
    let foodInKg = Number(input[index]);
    index++;

    let foodInGrams = foodInKg * 1000;
    let consumedFood = 0;


    while (input[index] !== `Adopted`) {
        let amount = Number(input[index]);
        consumedFood += amount;
        index++;
    }


    diff = Math.abs(foodInGrams - consumedFood);

    if (foodInGrams >= consumedFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}