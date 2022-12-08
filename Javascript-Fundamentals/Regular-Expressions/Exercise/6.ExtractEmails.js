function extractEmails(string) {
    const emailPattern = /(?<!\S)[a-z]+[\w.-]*@[a-z]+([.\-_]*[a-z]+)*\.[a-z]+/g;

    let match;
    while (match = emailPattern.exec(string)) {
        console.log(match[0]);
    }
}


extractEmails('Please contact us at: support@github.com.');