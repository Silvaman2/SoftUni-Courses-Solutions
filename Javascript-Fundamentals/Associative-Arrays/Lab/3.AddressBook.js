function addressBook(input) {
    const addresses = {};

    for(const string of input) {
        const [name, address] = string.split(`:`);
        addresses[name] = address;
    }
    const addressEntries = Object
    .entries(addresses)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for(const [name, address] of addressEntries) {
        console.log(`${name} -> ${address}`);
    }
}