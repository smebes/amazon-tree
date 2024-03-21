// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "downloadButton") {
            downloadCategories();
        }
    }
);

// function downloadCategories() {
//     const categoryElements = document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf _p13n-zg-nav-tree-all_style_zg-browse-height-large__1z5B8 a');
//     const categoryDetails = Array.from(categoryElements).map(el => `${el.innerText}: ${el.href}`).join('\n');

//     const blob = new Blob([categoryDetails], {type: 'text/plain;charset=utf-8'});
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'kategori.txt';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
// }

function downloadCategories() {
    // Verilen HTML yapısına göre alt kategorileri seçmek için doğru CSS seçicisini kullanın.
    const categoryElements = document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf._p13n-zg-nav-tree-all_style_zg-browse-height-large__1z5B8 a');
    // Eğer kategori linkleri bulunursa, her bir linkin metin içeriğini (kategori adını) konsola logla
    if (categoryLinks.length > 0) {
        categoryLinks.forEach(link => {
            console.log(link.innerText);
            categoryDetails += link.innerText + ": " + link.href + "\n";
        });
    } else {
        // Eğer kategori linkleri bulunamazsa, bir uyarı mesajı göster
        console.log("Kategori linkleri bulunamadı.");
    }
    // let categoryDetails = Array.from(categoryElements).map(el => `${el.innerText}: ${el.href}`).join('\n');

    // Elde edilen kategori detaylarını bir Blob nesnesi olarak oluşturun ve bir URL'ye dönüştürün.
    const blob = new Blob([categoryDetails], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);

    // Oluşturulan URL'yi kullanarak bir indirme bağlantısı oluşturun ve tıklayın.
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kategori_listesi.txt'; // İndirilen dosyanın adı.
    document.body.appendChild(a);
    a.click();

    // Sonrasında oluşturulan bağlantıyı ve URL'yi temizleyin.
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


// // Sayfa tamamen yüklendiğinde kategori indirme işlevini otomatik olarak çalıştır.
// window.onload = downloadCategories;

