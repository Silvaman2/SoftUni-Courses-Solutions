function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let yearInterestRate = depositAmount * (annualInterestRate / 100);
    let monthInterestRate = yearInterestRate / 12;
    let sum = depositAmount + depositTerm * monthInterestRate;
    console.log(sum);
}

depositCalculator(["2350",

"6 ",

"7 "]);

