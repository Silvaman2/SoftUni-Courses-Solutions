function moon(input) {
    let speed = Number(input[0]);
    let leterPer100Km = Number(input[1]);
    let totalDistance = 768800;

    let travelTime = Math.ceil(totalDistance / speed);
    let totalTime = travelTime + 3;
    let fuelRequired = (leterPer100Km * totalDistance) / 100;

    console.log(totalTime);
    console.log(fuelRequired);
}