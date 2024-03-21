chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getCategories") {
      chrome.tabs.executeScript({
          code: '(' + function() {
              const categories = Array.from(document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf a'))
                                      .map(a => a.textContent.trim());
              return categories;
          } + ')();'
      }, (results) => {
          sendResponse({categories: results[0]});
      });
  }
  return true; // Will respond asynchronously.
});
