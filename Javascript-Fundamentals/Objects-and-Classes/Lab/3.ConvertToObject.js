function convertToObject(jsonString) {
    const object = JSON.parse(jsonString);
    const objectKeys = Object.keys(object);

    for(const key of objectKeys) {
        const value = object[key];
        console.log(`${key}: ${value}`);
    }
}