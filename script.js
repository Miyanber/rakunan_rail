const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain',
    },
}

function loadHeader(src = "img/P1000454.jpg") {
    fetch("header.html", options)
        .then((content) => content.text()
        ).then((html) => {
            const header = document.createElement("header");
            document.body.insertBefore(header, document.body.firstChild);
            header.innerHTML = html;
            header.classList.add("subPage");
            console.log(header.innerHTML)
            header.children[1].src = src;
            console.log("loaded header");

            // DOMParserでHTMLを読み込める!
            // const parser = new DOMParser();
            // return parser.parseFromString(html, "text/html");
        })
}

function loadFooter() {
    fetch("footer.html", options)
        .then((content) => {
            return content.text()
        }).then((html) => {
            const footer = document.createElement("footer");
            document.body.insertBefore(footer, document.body.lastChild);
            footer.innerHTML = html;
            footer.classList.add("subPage");
            console.log("loaded footer")
        })
}