function sortAnArray(elements) {
    elements.sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b));

    for(const element of elements) {
        console.log(element);
    }
}

sortAnArray([`test`, `Deny`, `omen`, `Default`]);