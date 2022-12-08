function catalogue(input) {
    const products = {};

    for(const string of input) {
        const [productName, productPrice] = string.split(' : ');
        products[productName] = productPrice;
    }
    const productNames = Object.keys(products).sort((a, b) => a.localeCompare(b));

    let currentLetter;
    for(const productName of productNames) {
        const productPrice = products[productName];

        if(productName[0] !== currentLetter) {
            currentLetter = productName[0];
            console.log(currentLetter);
        }

        console.log(`${productName}: ${productPrice}`);
    }
}