function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetsBroken = Math.floor(lostFights / 2);
    let swordsBroken = Math.floor(lostFights / 3);
    let shieldsBroken = Math.floor(lostFights / 6);
    let armorBroken = Math.floor(shieldsBroken / 2);
    
    let helmetTotalCost = helmetsBroken * helmetPrice;
    let swordTotalCost = swordsBroken * swordPrice;
    let shieldTotalCost = shieldsBroken * shieldPrice;
    let armorTotalCost = armorBroken * armorPrice;

    let totalCost = helmetTotalCost
    + swordTotalCost
    + shieldTotalCost
    + armorTotalCost;
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}