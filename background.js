// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === "downloadCategories") {
//       chrome.tabs.executeScript({
//           code: '(' + function() {
//               const categories = Array.from(document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf a'))
//                                       .map(a => a.textContent.trim());
//               return categories;
//           } + ')();'
//       }, (results) => {
//           sendResponse({categories: results[0]});
//       });
//   }
//   return true; // Will respond asynchronously.
// });


// function downloadCategories() {
//   const categoryElements = document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf _p13n-zg-nav-tree-all_style_zg-browse-height-large__1z5B8 a');
//   let categoryDetails = Array.from(categoryElements).map(el => `${el.innerText}: ${el.href}`).join('\n');

//   const blob = new Blob([categoryDetails], {type: 'text/plain;charset=utf-8'});
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'kategori.txt';
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   URL.revokeObjectURL(url);
// }

