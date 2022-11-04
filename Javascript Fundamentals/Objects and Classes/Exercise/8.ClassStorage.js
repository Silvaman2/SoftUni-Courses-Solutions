class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }
    getProducts() {
        const jsonStorage = this.storage.map(a => JSON.stringify(a));

        return jsonStorage.join('\n');
    }
}