function shoppingList(input) {
    let list = input.shift()
        .split('!');

    for(const string of input) {
        const [command, product, replacement] = string.split(' ');

        switch(command) {
            case `Urgent`:
                urgent(product);
                break;
            case `Unnecessary`:
                unnecessary(product);
                break;
            case `Correct`:
                correct(product, replacement);
                break;
            case `Rearrange`:
                rearrange(product);
                break;
        }
    }

    console.log(list.join(', '));

    function urgent(item) {
        if(!list.includes(item)) {
            list.unshift(item);
        }
    }
    function unnecessary(item) {
        if(list.includes(item)) {
            list.splice(list.indexOf(item), 1);
        }
    }
    function correct(item, replacement) {
        if(list.includes(item)) {
            list[list.indexOf(item)] = replacement;
        }
    }
    function rearrange(item) {
        if(list.includes(item)) {
            list.splice(list.indexOf(item), 1);
            list.push(item);
        }
    }
}