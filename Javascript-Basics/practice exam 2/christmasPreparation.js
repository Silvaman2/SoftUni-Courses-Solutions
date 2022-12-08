function christmasPreparation(input) {
    let paper = Number(input[0]);
    let cloth = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    let discountInPer = discount / 100;

    let paperCost = paper * 5.8;
    let clothCost = cloth * 7.2;
    let glueCost = glue * 1.2;

    let totalCost = paperCost + clothCost + glueCost;
    let finalCost = totalCost - (totalCost * discountInPer);

    console.log(finalCost.toFixed(3));
}