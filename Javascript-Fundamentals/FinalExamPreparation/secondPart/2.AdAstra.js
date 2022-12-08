function adAstra([string]) {
    const foodPattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>10000|\d{1,4})\1/g;

    const foodList = [];
    let foodMatch;
    while(foodMatch = foodPattern.exec(string)) {
        foodList.push(foodMatch.groups);
    }
    const totalCalories = foodList.length ? 
    foodList
    .map(item => Number(item.calories))
    .reduce((a, b) => a + b) : 0;
    const daysLast = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${daysLast} days!`);
    for(const food of foodList) {
        console.log(`Item: ${food.name}, Best before: ${food.date}, Nutrition: ${food.calories}`);
    }
}