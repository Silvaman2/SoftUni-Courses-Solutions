function Rounding(number, precision) {
    precision = Math.min(15, precision);
    let roundNumber = number.toFixed(precision);
    console.log(parseFloat(roundNumber));
}