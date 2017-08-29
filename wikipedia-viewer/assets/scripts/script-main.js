const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=dog";
// const url = "https://jsonblob.com/api/jsonBlob/d82d9345-34c0-11e7-ae4c-6beae9fe30f9";

document.addEventListener("DOMContentLoaded", function () {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let searchResult = data.query.search.title;
            console.log(searchResult);
        })
        .catch(function (error) {
            console.log(error);
        })

    searchBtn.onclick = function () {
    }
});