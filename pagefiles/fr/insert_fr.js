fetch("/pagefiles/links.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("head").innerHTML = data;
  });

fetch("/pagefiles/fr/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("/pagefiles/fr/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });