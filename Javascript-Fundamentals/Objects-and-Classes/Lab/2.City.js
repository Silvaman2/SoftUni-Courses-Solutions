function city(city) {
    const cityEntries = Object.entries(city);
    for(const entry of cityEntries) {
        const [key, value] = entry;

        console.log(`${key} -> ${value}`);
    }
}