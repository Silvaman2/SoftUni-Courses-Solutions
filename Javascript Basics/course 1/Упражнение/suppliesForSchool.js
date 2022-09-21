function suppliesForSchool(input) {
    let penCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discount = Number(input[3]);

    let penCost = penCount * 5.8;
    let markerCost = markerCount * 7.2;
    let detergentCost = detergentLiters * 1.2;
    let initialPrice = penCost + markerCost + detergentCost;
    let finalPrice = initialPrice - (initialPrice * (discount/100));
    console.log(finalPrice);
}