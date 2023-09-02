//設定内容を出力
console.log(setting);

document.addEventListener("DOMContentLoaded", () => {
    const loading = document.createElement("div");
    loading.classList.add("loading");
    const loadingElement = document.body.appendChild(loading);
    loadingElement.appendChild(document.createElement("div"));
    const spinner = loadingElement.appendChild(document.createElement("span"));
    spinner.innerHTML = "Loading...";
    //DOMContentLoadedで読み込みを待ってから表示
    document.body.style.visibility = "visible";
    main(setting);
})

//fetchのオプション(リクエスト)
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain',
    },
}

/**
 * 
 * @param {Object} setting 設定用オブジェクト
 */
async function main(setting) {
    if (setting == null) {
        console.warn("設定用オブジェクトが存在しません。");
    } else {
        if (setting.loadHeader == true) {
            const headerOptions = setting.loadheaderOptions;
            await loadHeader(headerOptions.index, headerOptions.img_src, headerOptions.img_class);
        }
        if (setting.loadFooter == true) {
            await loadFooter();
        }
        if (setting.loadTopCss == true) {
            addLoadedClass();
        }
    }
}

/**
 * 
 * @param {number} index TOPページを0番目としたとき、何番目のページか
 * @param {string} src ヘッダー写真のパス
 * @param {string} className （写真につけるクラス名）未使用のため設定不要
 * 
 * ヘッダーを読み込む関数
 */
async function loadHeader(index, src, className = "") {
    return fetch("header.html", options)
        .then((content) => content.text())
        .then(async (html) => {
            console.log(html);
            document.body.insertAdjacentHTML("afterbegin", html);
            const img = document.getElementById("TopImg");
            // if (!className) img.classList.add(className);
            img.src = src;
            document.querySelectorAll("nav ul li a")[index].classList.add('current');
            console.log("loaded Header");
            await new Promise((resolve) => {
                img.addEventListener("load", () => {
                    resolve();
                })
            })

            // DOMParserでHTMLを読み込める!
            // const parser = new DOMParser();
            // return parser.parseFromString(html, "text/html");}) 
        })
}

/**
 * 
 * フッターを読み込む関数
 */
async function loadFooter() {
    return await fetch("footer.html", options)
        .then((content) => content.text())
        .then((html) => {
            const footer = document.createElement("footer");
            document.body.insertBefore(footer, document.body.lastChild);
            footer.innerHTML = html;
            footer.classList.add("subPage");
            console.log("loaded footer")
        })
}

/* async function loadSpreadSheetData(className, url) {
    const latestDate = localStorage.getItem(`latest Update of ${className}`);
    const latestTable = localStorage.getItem(`${className} table HTML`);
    const tableElement = document.querySelector("table." + className);
    if (latestDate == null || latestTable == null || latestDate - Date.now() > 24 * 60 * 60 * 1000) {
        await fetch(url, options)
            .then(content => content.text())
            .then(table => {
                tableElement.outerHTML = table;
                console.log(`loaded ${className} table from URL:${url}`);
                localStorage.setItem(`latest Update of ${className}`, Date.now());
                localStorage.setItem(`${className} table HTML`, table);
            })
    } else {
        tableElement.outerHTML = latestTable;
    }
} */

//スクロール量が100px以上の場合にTOPボタンを表示
window.addEventListener('scroll', () => {
    const content = document.querySelector("div.top");
    if (100 < window.scrollY) {
        content.classList.add("display");
    } else {
        content.classList.remove("display");
    }
});

/**
 * 読み込み完了時にクラスを付与
 */
function addLoadedClass() {
    document.querySelector("div.loading").classList.add("loaded");
    document.querySelector("div.loading div").classList.add("loaded");
    document.querySelector("div.loading span").classList.add("loaded");
    setTimeout(() => {
        document.querySelector("header img").classList.add("display");
    }, 500)
}

/* function loadHead(name) {
    document.head.insertAdjacentHTML("afterbegin", html);
    const img = document.getElementsByTagName("img")[0];
    img.src = src;
    document.getElementsByTagName("nav")[0].children[0].children[index].children[0].classList.add('now');
    if (className != null) img.classList.add(className);
    console.log("loaded element");

    // DOMParserでHTMLを読み込める!
    // const parser = new DOMParser();
    // return parser.parseFromString(html, "text/html");
}*/