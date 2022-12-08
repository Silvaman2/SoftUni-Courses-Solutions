function legendaryFarming(input) {
    const items = {
        shards:`Shadowmourne`,
        fragments:`Valanyr`,
        motes:`Dragonwrath`
    }
    const materials = {
        shards:0,
        fragments:0,
        motes:0
    };

    const inputArray = input.split(' ');

    let winner;

    while(inputArray.length) {
        const currentQuantity = Number(inputArray.shift());
        const currentMaterial = inputArray.shift().toLowerCase();

        if(materials[currentMaterial]) {
            materials[currentMaterial] += currentQuantity;
        } else {
            materials[currentMaterial] = currentQuantity;
        }

        winner = Object.keys(items)
        .find(material => materials[material] >= 250);

        if(winner) {
            materials[winner] -= 250;
            break;
        }
    }
    console.log(items[winner], `obtained!`);


    const keyMaterials = Object.entries(materials)
    .filter(material => Object.keys(items).includes(material[0]))
    .sort((a, b) => b[1] - a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]));

    Object.keys(items).forEach(name => delete materials[name]);

    const junkMaterials = Object.entries(materials).sort();
    const sortedMaterials = keyMaterials.concat(junkMaterials);

    for(const [material, quantity] of sortedMaterials) {
        console.log(`${material}: ${quantity}`);
    }
}