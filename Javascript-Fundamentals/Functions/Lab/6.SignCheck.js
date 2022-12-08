function signCheck(a, b, c) {
    let isPos = isPositive([a, b, c]);

    console.log(isPos ? 'Positive' : 'Negative');

    function isPositive(numbers) {
        let negativeCount = 0;

        for (let number of numbers) {
            if (number < 0) {
                negativeCount++;
            }
        }
        let result = negativeCount % 2 == 0

        return result;
    }
}