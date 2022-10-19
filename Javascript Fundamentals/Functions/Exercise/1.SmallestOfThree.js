function smallestOfThree(a, b, c) {
    let smallestNumber = min(min(a,b), c);
    return smallestNumber;

    function min(a, b) {
        return a < b ? a : b;
    }
}