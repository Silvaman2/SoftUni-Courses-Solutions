function movies(input) {
    const movies = [];
    for(const string of input) {

        if(string.includes(`addMovie`)) {
            const name = command.split('addMovie ')[1];
            const movie = {
                name: name
            };
            movies.push(movie); 
        } else if(string.includes(`directedBy`)) {
            const [name, director] = string.split(' directedBy ');
            const movie = movies.find(a => a.name === name);
            if(movie) {
                movie.director = director;
            }
        } else if(string.includes(`onDate`)) {
            const [name, date] = string.split(' onDate ');
            const movie = movies.find(a => a.name === name);
            if(movie) {
                movie.date = date;
            }
        }
    }

    for(const movie of movies) {
        const jsonMovie = JSON.stringify(movie);
        if(movie.name && movie.director && movie.date) {
            console.log(jsonMovie);
        }
    }
}