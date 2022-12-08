function summerOutfit(input) {
    let temp = Number(input[0]);
    let timeOfDay = input[1];

    let outfit;
    let shoes;

    if(temp >= 10 && temp <= 18) {
        if(timeOfDay === 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (timeOfDay === 'Afternoon' || timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (temp > 18 && temp <= 24) {
        if(timeOfDay === 'Morning' || timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if(timeOfDay === 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    } else if(temp >= 25) {
        if(timeOfDay === 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if(timeOfDay === 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if(timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}