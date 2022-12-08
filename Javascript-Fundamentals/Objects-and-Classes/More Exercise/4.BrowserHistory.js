function browserHistory(browser, actions) {
    browser.performAction = function(action) {

        this[`Browser Logs`].push(action);

        action = action.split(' ');
        const command = action.shift();
        const siteName = action.join(' ');

        switch(command) {
            case `Open`:
                this[`Open Tabs`].push(siteName);
                break;
            case `Close`:
                if(this[`Open Tabs`].includes(siteName)) {
                    const tabIndex = this[`Open Tabs`].indexOf(siteName);
                    this[`Open Tabs`].splice(tabIndex, 1);
                    this[`Recently Closed`].push(siteName);
                } else {
                    this[`Browser Logs`].pop();
                }
                break;
            case `Clear`:
                this[`Open Tabs`] = [];
                this[`Recently Closed`] = [];
                this[`Browser Logs`] = [];
                break;
        }
    }
    browser.info = function() {
        console.log(browser[`Browser Name`]);
        console.log(`Open Tabs: ${browser[`Open Tabs`].join(`, `)}`);
        console.log(`Recently Closed: ${browser[`Recently Closed`].join(`, `)}`);
        console.log(`Browser Logs: ${browser[`Browser Logs`].join(`, `)}`);
    }

    for(const action of actions) {
        browser.performAction(action);
    }
    browser.info();
}

browserHistory({
    "Browser Name":"Google Chrome",
    "Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]
    },
    ["Close Facebook", 
    "Open StackOverFlow", 
    "Open Google"]);