document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({action: "getCategories"}, function(response) {
        const categories = response.categories;
        const listElement = document.getElementById('categoryList');
        categories.forEach(category => {
            const listItem = document.createElement('li');
            listItem.textContent = category;
            listElement.appendChild(listItem);
        });
    });
});
