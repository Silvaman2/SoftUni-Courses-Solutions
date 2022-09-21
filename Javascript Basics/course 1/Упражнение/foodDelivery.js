function foodDelivery(input) {
    let chickenCount = Number(input[0]);
    let fishCount = Number(input[1]);
    let vegetarianCount = Number(input[2]);

    let chickenCost = chickenCount * 10.35;
    let fishCost = fishCount * 12.4;
    let vegetarianCost = vegetarianCount * 8.15;

    let totalMenuCost = chickenCost + fishCost + vegetarianCost;
    let dessertCost = totalMenuCost * 0.2;
    
    let totalOrderCost = totalMenuCost + dessertCost + 2.5;
    console.log(totalOrderCost);
}