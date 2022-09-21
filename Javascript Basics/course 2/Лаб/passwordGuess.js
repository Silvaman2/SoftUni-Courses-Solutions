function passwordGuess(input) {
    let passwordInput = input[0];

    let password = 's3cr3t!P@ssw0rd';

    if(passwordInput === password) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}