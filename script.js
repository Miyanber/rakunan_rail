const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain',
    },
}


function loadHeader(index, className = null, src = "../img/P1000454.jpg") {
    fetch("header.html", options)
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

function loadFooter() {
    fetch("footer.html", options)
        .then((content) => content.text())
        .then((html) => {
            const footer = document.createElement("footer");
            document.body.insertBefore(footer, document.body.lastChild);
            footer.innerHTML = html;
            footer.classList.add("subPage");
            console.log("loaded footer")
        })
}

window.addEventListener('scroll', () => {
    const content = document.querySelector("div.top");
    if (100 < window.scrollY) {
        content.classList.add("display");
    } else {
        content.classList.remove("display");
    }
});

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