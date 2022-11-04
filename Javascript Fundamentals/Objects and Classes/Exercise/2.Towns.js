function towns(input) {

    for(const string of input) {
        let town = {};
        let [name, latitude, longitude] = string.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        [town.town, town.latitude, town.longitude] = [name, latitude, longitude];

        console.log(town);
    }
}