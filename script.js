fetch("header.html", {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html',
    },
}).then((content) => {
    document.body.innerHTML = content.text() + document.body.innerHTML;
})