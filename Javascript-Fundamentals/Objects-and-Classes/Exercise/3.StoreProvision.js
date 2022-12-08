function storeProvision(currentStockArray, orderedStockArray) {
    let currentStock = {};

    for(let i = 0; i < currentStockArray.length; i++) {
        const currentName = currentStockArray[i++];
        const currentQuantity = Number(currentStockArray[i]);

        currentStock[currentName] = currentQuantity;
    }

    for(let i = 0; i < orderedStockArray.length; i++) {
        const currentName = orderedStockArray[i++];
        const currentQuantity = Number(orderedStockArray[i]);

        if(!currentStock[currentName]) {
            currentStock[currentName] = 0;
        }

        currentStock[currentName] += currentQuantity;
    }

    for(const entry of Object.entries(currentStock)) {
        const currentName = entry[0];
        const currentQuantity = entry[1];

        console.log(`${currentName} -> ${currentQuantity}`);
    }
    
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);