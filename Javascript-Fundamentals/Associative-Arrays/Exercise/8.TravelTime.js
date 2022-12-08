function travelTime(input) {
    const countries = {};

    for(const string of input) {
        let [country, town, travelCost] = string.split(' > ');
        travelCost = Number(travelCost);

        if(countries.hasOwnProperty(country)) {
            if(countries[country].hasOwnProperty(town)) {
                const currentCost = countries[country][town];
                countries[country][town] = Math.min(currentCost, travelCost);
            } else {
                countries[country][town] = travelCost;
            }
        } else {
            countries[country] = {
                [town]: travelCost
            };
        }
    }


    const sortedCountries = Object.entries(countries)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([countryName, towns]) => {
            const sortedTowns = Object.entries(towns)
                .sort((a, b) => a[1] - b[1]);
            
            return [countryName, Object.fromEntries(sortedTowns)];
        });

        for(const [countryName, towns] of sortedCountries) {
            let string = `${countryName} -> `;

            for(const townName in towns) {
                const travelCost = towns[townName];
                string += `${townName} -> ${travelCost} `;
            }

            console.log(string);
        }

}