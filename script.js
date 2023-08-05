const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain',
    },
}

async function loadHeader(index, className = null, src = "../img/P1000454.jpg") {
    return await fetch("header.html", options)
        .then((content) => content.text())
        .then((html) => {
            console.log(html);
            document.body.insertAdjacentHTML("afterbegin", html);
            const img = document.getElementsByTagName("img")[0];
            img.src = src;
            document.getElementsByTagName("nav")[0].children[0].children[index].children[0].classList.add('now');
            if (className != null) img.classList.add(className);
            console.log("loaded element");

            // DOMParserでHTMLを読み込める!
            // const parser = new DOMParser();
            // return parser.parseFromString(html, "text/html");
        })
}

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

window.addEventListener('scroll', () => {
    const content = document.querySelector("div.top");
    if (100 < window.scrollY) {
        content.classList.add("display");
    } else {
        content.classList.remove("display");
    }
});

function addLoadedClass() {
    document.querySelector("div.loading").classList.add("loaded");
    setTimeout(() => {
        document.querySelector("header img").classList.add("display");
    }, 500)

}

function loadHead(name) {
    document.head.insertAdjacentHTML("afterbegin", html);
    const img = document.getElementsByTagName("img")[0];
    img.src = src;
    document.getElementsByTagName("nav")[0].children[0].children[index].children[0].classList.add('now');
    if (className != null) img.classList.add(className);
    console.log("loaded element");

    // DOMParserでHTMLを読み込める!
    // const parser = new DOMParser();
    // return parser.parseFromString(html, "text/html");
}