function yardGreening(input) {
    let distance = Number(input[0]);
    let initialPrice = distance * 7.61;
    let discount = initialPrice * 0.18;
    let finalPrice = initialPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}