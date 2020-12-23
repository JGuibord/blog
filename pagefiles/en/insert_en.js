fetch("/pagefiles/links.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("head2").innerHTML = data;
  });

fetch("/pagefiles/en/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("/pagefiles/en/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
