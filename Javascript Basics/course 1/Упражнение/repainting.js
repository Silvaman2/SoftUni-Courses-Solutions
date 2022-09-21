function repainting(input) {
    let nylonAmount = Number(input[0]);
    let paintAmount = Number(input[1]);
    let diluentAmount = Number(input[2]);
    let timeRequired = Number(input[3]);

    let nylonCost = (nylonAmount + 2) * 1.5;
    let paintCost = (paintAmount + (paintAmount * 0.1)) * 14.5;
    let diluentCost = diluentAmount * 5;

    let totalMaterialCost = nylonCost + paintCost + diluentCost + 0.4;
    let workerCost = (totalMaterialCost * 0.3) * timeRequired;
    let totalCost = totalMaterialCost + workerCost;
    console.log(totalCost);
}


