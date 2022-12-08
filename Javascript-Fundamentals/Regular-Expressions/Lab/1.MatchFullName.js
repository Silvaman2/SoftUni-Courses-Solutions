function matchFullName(string) {
    const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    const matches = string.match(pattern);

    console.log(matches.join(' '));
}