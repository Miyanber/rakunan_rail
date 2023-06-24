fetch("header.html", {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html',
    },
}).then((content) => {
    document.write(content)
})