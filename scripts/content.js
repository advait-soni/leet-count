chrome.runtime.onMessage.addListener((message) => {
    if (message.url) {
        fetch(message.url)
        .then(response => console.log(response))
    }
});
