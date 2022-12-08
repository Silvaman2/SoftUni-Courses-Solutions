function schoolLibrary(input) {
    let shelf = input.shift().split('&');
    const commands = input;

    for(let string of commands) {
        let [command, firstElement, secondElement] = string.split(' | ');


        switch(command) {
            case `Add Book`:
                if(!shelf.includes(firstElement)) {
                    shelf.unshift(firstElement);
                }
                break;
            case `Take Book`:
                if(shelf.includes(firstElement)) {
                    shelf.splice(shelf.indexOf(firstElement), 1);
                }
                break;
            case `Swap Books`:
                const firstIndex = shelf.indexOf(firstElement);
                const secondIndex = shelf.indexOf(secondElement);

                if(shelf.includes(firstElement) && shelf.includes(secondElement)) {
                    [shelf[firstIndex], shelf[secondIndex]] = [secondElement, firstElement];                    
                }
                break;
            case `Insert Book`:
                if(!shelf.includes(firstElement)) {
                    shelf.push(firstElement);
                }
                break;
            case `Check Book`:
                if(shelf[firstElement]) {
                    console.log(shelf[firstElement]);
                }
                break;
        }
    }
    console.log(shelf.join(', '));
}