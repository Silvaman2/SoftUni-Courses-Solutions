function orders(product, amount) {
    let costPerProduct;

    switch(product) {
        case `coffee`:
            costPerProduct = 1.5;
            break;
        case `water`:
            costPerProduct = 1;
            break;
        case `coke`:
            costPerProduct = 1.4;
            break;
        case `snacks`:
            costPerProduct = 2;
            break;
    }
    let totalCost = costPerProduct * amount;

    console.log(totalCost.toFixed(2));
}