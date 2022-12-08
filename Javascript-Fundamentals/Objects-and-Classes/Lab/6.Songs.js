function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    input.shift();
    const filterType = input.pop();
    let songsList = [];

    for(const string of input) {
        const [type, name, time] = string.split('_');

        const song = new Song(type, name, time);
        songsList.push(song);
    }
    let filteredSongs;
    if(filterType === 'all') {
        filteredSongs = songsList;
    } else {
        filteredSongs = songsList.filter(a => a.type === filterType);
    }
    filteredSongs.forEach(a => console.log(a.name));
}