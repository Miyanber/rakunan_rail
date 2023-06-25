const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain',
    },
}

function loadHeader() {
    fetch("header.html", options)
        .then((content) => content.text()
        ).then((html) => {
            const header = document.createElement("header");
            document.body.insertBefore(header, document.body.firstChild);
            header.outerHTML = html;
            header.classList.add("subPage");
            console.log("loaded header")

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
            footer.outerHTML = html;
            footer.classList.add("subPage");
            console.log("loaded footer")
        })
}