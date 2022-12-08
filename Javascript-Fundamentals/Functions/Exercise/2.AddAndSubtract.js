function addAndSubtract(a, b, c) {
    let result = subtract(sum(a, b), c);

    return result;

    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
}