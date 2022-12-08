function storage(input) {
    const storageMap = new Map();
    for(const string of input) {
        let [product, quantity] = string.split(' ');
        quantity = Number(quantity);

        if(storageMap.has(product)) {
            const storageQuantity = storageMap.get(product);
            const sum = storageQuantity + quantity;
            storageMap.set(product, sum);
        } else {
            storageMap.set(product, quantity);
        }
    }

    for(const [product, quantity] of storageMap) {
        console.log(`${product} -> ${quantity}`);
    }
}