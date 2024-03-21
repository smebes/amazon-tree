// background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.contentScriptQuery == "fetchCategoryDetails") {
            fetch(`https://www.amazon.com${request.url}`)
                .then(response => response.text())
                .then(text => sendResponse({data: text}))
                .catch(error => console.log('Error fetching details:', error));
            return true;  // Will respond asynchronously.
        }
    }
);
