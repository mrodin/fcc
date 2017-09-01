const WikiViewer = function() {

  let
    searchBtn,
    searchResults,
    url,
    testString

  const _init = function() {
    searchBtn = document.getElementById("searchBtn");
    searchResults = document.getElementById("searchResults");
    url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=dog";
    testString = "";

    _getData();
    _addEventHandlers();
  }

  const _addEventHandlers = function() {
    searchBtn.addEventListener("click", _getData, false);
    searchBtn.addEventListener("click", _testFunc, false);
  }

  const _testFunc = function() {
    alert(testString);
  }

  const _getData = function() {
    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        testString = data.query.search[1].title;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  return {
    init: _init
  }
}();

WikiViewer.init();