function comments(input) {
    const userList = new Set();

    const comments = new Map();

    for(const string of input) {
        if(/^user /.test(string)) {
            const username = string.split(' ')[1];
            userList.add(username);
        } else if(/^article /.test(string)) {
            const articleName = string.split(' ')[1];
            if(comments.has(articleName)) continue;
            comments.set(articleName, []);
        } else if(/\bposts on\b/.test(string)) {
            const stringArray = string.split(': ');

            const [username, articleName] = stringArray.shift().split(' posts on ');
            const [commentTitle, commentContent] = stringArray.shift().split(', ');


            const articleComments = comments.get(articleName);

            if(!articleComments || !userList.has(username)) continue;

            articleComments.push({
                username:username,
                title:commentTitle,
                content:commentContent
            });
        }
    }
    const sortedComments = Array.from(comments)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([articleName, commentsArray]) => {
        const sortedArray = commentsArray.sort((a, b) => a.username.localeCompare(b.username));

        return [articleName, sortedArray];
    });

    for(const [articleName, commentsArray] of sortedComments) {
        console.log('Comments on', articleName);
        for(const comment of commentsArray) {
            console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        }
    }
}