function flightSchedule(input) {

    const flights = {};
    const filterStatus = input.pop()[0];

    for(const string of input[0]) {
        const flight = {};
        let command = string.split(' ');
        const flightName = command.shift();
        const destination = command.join(' ');
        flight.Destination = destination;
        flight.Status = `Ready to fly`;

        flights[flightName] = flight;
    }

    for(const string of input[1]) {
        let command = string.split(` `);
        const flightName = command.shift();
        const status = command.join(' ');

        if(flights.hasOwnProperty(flightName)) {
            flights[flightName].Status = status;
        }
    }
    const filteredKeys = Object.keys(flights).filter(a => flights[a].Status === filterStatus);

    for(const key of filteredKeys) {
        console.log(flights[key]);
    }
}