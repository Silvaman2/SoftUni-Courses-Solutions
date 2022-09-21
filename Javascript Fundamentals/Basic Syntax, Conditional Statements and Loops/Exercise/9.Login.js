function Login(input) {
    let username = input[0];
    for(let i = 1; i < input.length; i++) {
        let reversedString = '';
        for(let i2 = input[i].length - 1; i2 >= 0; i2--) {
            reversedString += input[i][i2];
        }
        if(reversedString === username) {
            console.log(`User ${username} logged in.`);
        } else {
            if(i < 4) {
                console.log(`Incorrect password. Try again.`);
            } else {
                console.log(`User ${username} blocked!`);
            }
        }
    }
}