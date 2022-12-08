function listOfProducts(products) {
    products.sort();
    let productList = products.map((product, index) => `${index + 1}.${product}`);
    
    for(let product of productList) {
        console.log(product);
    }
}