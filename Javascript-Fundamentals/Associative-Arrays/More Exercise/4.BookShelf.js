function bookShelf(input) {
    const shelves = new Map();

    for (const string of input) {
        if (string.includes(' -> ')) {
            const [id, genre] = string.split(' -> ');
            if (shelves.has(id)) continue;
            shelves.set(id, {
                genre: genre,
                books: new Map()
            })
        } else if (string.includes(': ')) {
            const [[title], [author, genre]] = string.split(': ').map(a => a.split(', '));

            const currentShelf = Array.from(shelves.values())
            .find(shelf => shelf.genre === genre);

            if(!currentShelf) continue;

            currentShelf.books.set(title, author);
        }
    }
    
    const sortedShelves = Array.from(shelves)
    .sort((a, b) => b[1].books.size - a[1].books.size);

    sortedShelves.forEach(([id, shelf]) => {
        shelf.books = Array.from(shelf.books)
        .sort((a, b) => a[0].localeCompare(b[0]));
    })

    for(const [id, shelf] of sortedShelves) {
        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);

        for(const [title, author] of shelf.books) {
            console.log(`--> ${title}: ${author}`);
        }
    }
}


bookShelf(['1 -> history', 
'1 -> action', 
'Death in Time: Criss Bell, mystery', 
'2 -> mystery', 
'3 -> sci-fi', 
'Child of Silver: Bruce Rich, mystery', 
'Hurting Secrets: Dustin Bolt, action', 
'Future of Dawn: Aiden Rose, sci-fi', 
'Lions and Rats: Gabe Roads, history', 
'2 -> romance', 
'Effect of the Void: Shay B, romance', 
'Losing Dreams: Gail Starr, sci-fi', 
'Name of Earth: Jo Bell, sci-fi', 
'Pilots of Stone: Brook Jay, history']);