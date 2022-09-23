function rightPlace(string, char, target) {
    let result = string.replace('_', char);
    console.log(result === target ? 'Matched' : 'Not Matched');
}