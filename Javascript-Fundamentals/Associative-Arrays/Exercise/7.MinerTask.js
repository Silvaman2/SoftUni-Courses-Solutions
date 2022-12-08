function minerTask(input) {
    const resources = {};

    while(input.length) {
        const resource = input.shift();
        const quantity = Number(input.shift());
        
        if(resources.hasOwnProperty(resource)) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }

    for(const [resource, quantity] of Object.entries(resources)) {
        console.log(`${resource} -> ${quantity}`);
    }
}