const WikiViewer = function() {

  let url,
    search;

  const init = function() {
    url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=extracts&exintro&explaintext&exsentences=1&gsrsearch=";
    search = document.getElementById("search");

    addEventHandlers();
  }

  const addEventHandlers = function() {
    search.onkeydown = function(e) {
      if (e.keyCode == 13) {
        let searchQuery = search.value;
        if (searchQuery != "") {
          getData(searchQuery);
        } else {
          console.log("empty search field"); // TODO: log this on screen
        }
      }
    }
  }

  const getData = function(searchQuery) {
    let searchUrl = url + searchQuery;
    fetch(searchUrl)
      .then((resp) => resp.json())
      .then((data) => {
        let output = "";
        let pages = data.query.pages;
        for (let page in pages) {
          if (pages.hasOwnProperty(page)) {
            let result = pages[page];
            output += `
              <div class="result">
                <h2>${result.title}</h2>
                <p>${result.extract}</p>
              </div>
              `;
          }
          document.getElementById("output").innerHTML = output;
        }
      })
  }

  return {
    init: init
  }
}();

WikiViewer.init();