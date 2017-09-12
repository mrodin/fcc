const WikiViewer = function() {

  let url;

  const init = function() {
    url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=dog";
    
    addEventHandlers();
  }

  const addEventHandlers = function() {
    document.getElementById("searchBtn").addEventListener("click", getData);
  }

  const getData = function() {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let output = "<h2>Search Results</h2>";
        data.query.search.forEach(function(result) {
          output += `
                <ul class="list-group mb-3">
                  <li>Title: ${result.title}</li>
                  <li>Snippet: ${result.snippet}</li>
                </ul>
              `;
        });
        document.getElementById("output").innerHTML = output;
      })
  }

  return {
    init: init
  }
}();

WikiViewer.init();

// const WikiViewer = function() {

//   let
//     searchBtn,
//     searchResults,
//     url,
//     ul,
//     testString;

//   const init = function() {
//     searchBtn = document.getElementById("searchBtn");
//     searchResults = document.getElementById("searchResults");
//     url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=dog";
//     ul = document.getElementById("searchResults");
//     testString = "";

//     addEventHandlers();
//   }

//   const addEventHandlers = function() {
//     // searchBtn.addEventListener("click", setTimeout(() => {
//     //   getData();
//     // }, 300), false);
//     searchBtn.addEventListener("click", getData, false);
//     // searchBtn.addEventListener("click", testFunc, false);
//   }

//   const testFunc = function() {
//     setTimeout(() => {
//       getData();
//     }, 1000);
//   }

//   const getData = function() {
//     fetch(url)
//       .then((resp) => resp.json())
//       .then(function(data) {
//         let searchResults = data.query.search;
//         return searchResults.map(function(result) {
//           let
//             li = createNode("li"),
//             h1 = createNode("h1"),
//             p = createNode("p");
//           h1.innerHTML = result.title;
//           p.innerHTML = result.snippet;
//           append(li, h1);
//           append(li, p);
//           append(ul, li);
//         })
//       })
//       .catch(function(error) {
//         console.log(error);
//       })
//   }

//   const createNode = function(element) {
//     return document.createElement(element);
//   }

//   const append = function(parent, element) {
//     return parent.appendChild(element);
//   }

//   return {
//     init: init
//   }
// }();

// WikiViewer.init();