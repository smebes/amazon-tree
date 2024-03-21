// content.js
const getCategoryLinks = () => {
    const links = document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf a');
    const categories = Array.from(links).map(link => link.innerText);
    return categories;
};

chrome.runtime.sendMessage({
    action: "fetchCategories",
    categories: getCategoryLinks()
});
