// document.getElementById('downloadButton').addEventListener('click', async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['content.js']
//     });
// });


// document.getElementById('downloadButton').addEventListener('click', function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {action: "downloadCategories"});
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadButton').addEventListener('click', async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        });
    });
    document.getElementById('downloadButton1').addEventListener('click', async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        // 'downloadCategories1' fonksiyonunun içeriğini string olarak yolluyoruz.
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: function downloadCategories1() {
                let details = `Title: "Title not found"}\n`;
                console.log(details);
                const categoryLinks = document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf._p13n-zg-nav-tree-all_style_zg-browse-height-large__1z5B8 a');
                // Eğer kategori linkleri bulunursa, her bir linkin metin içeriğini (kategori adını) konsola logla
                if (categoryLinks.length > 0) {
                    categoryLinks.forEach(link => {
                        console.log(link.innerText);
                    });
                } else {
                    // Eğer kategori linkleri bulunamazsa, bir uyarı mesajı göster
                    console.log("Kategori linkleri bulunamadı.");
                }
                // Sayfadaki tüm kategori linklerini seç
                // const categoryLinks = document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf._p13n-zg-nav-tree-all_style_zg-browse-height-large__1z5B8 a');

                // Kategori isimlerini bir diziye topla
                let categories = Array.from(categoryLinks).map(link => link.innerText);

                // Dizi elemanlarını bir metin haline getir (her bir kategori adını yeni bir satıra yerleştir)
                let categoriesText = categories.join('\n');

                // Metni bir Blob nesnesine dönüştür
                let blob = new Blob([categoriesText], { type: 'text/plain;charset=utf-8' });

                // Blob'a bir URL atayarak indirilebilir bir link oluştur
                let url = URL.createObjectURL(blob);

                // Dinamik olarak bir `<a>` elementi oluştur
                let downloadLink = document.createElement('a');
                downloadLink.href = url;

                // İndirilecek dosyanın adını belirle
                downloadLink.download = 'kategori_listesi.txt';

                // `<a>` elementini DOM'a ekle, tıkla ve sonra kaldır
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                // URL'yi iptal et
                URL.revokeObjectURL(url);

                return categoryLinks;
            }
        });
    });
    // document.getElementById('downloadButton1').addEventListener('click', function() {
    //     chrome.scripting.executeScript({
    //         target: {tabId: tab.id},
    //         function: downloadCategories1
    //     }, (injectionResults) => {
    //         for (const frameResult of injectionResults)
    //             if (frameResult.result) {
    //                 const details = frameResult.result;
    //                 const blob = new Blob([details], {type: 'text/plain;charset=utf-8'});
    //                 const url = URL.createObjectURL(blob);
    //                 const a = document.createElement('a');
    //                 a.href = url;
    //                 a.download = asin ? `${asin}.txt` : '1.txt';
    //                 document.body.appendChild(a);
    //                 a.click();
    //                 document.body.removeChild(a);
    //                 URL.revokeObjectURL(url);
    //             }
    //     });
       
    // });
})


function downloadCategories1() {
    let details = `Title: "Title not found"}\n`;
    return details;
}

function downloadCategories() {
    // Verilen HTML yapısına göre alt kategorileri seçmek için doğru CSS seçicisini kullanın.
    const categoryElements = document.querySelectorAll('._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf _p13n-zg-nav-tree-all_style_zg-browse-height-large__1z5B8 a');
    let categoryDetails = Array.from(categoryElements).map(el => `${el.innerText}: ${el.href}`).join('\n');

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
