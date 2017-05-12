var quotesHtmlCode = "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>";

$(document).ready(function () {
    showRandomQuote();

    $("[name=\"new-quote\"]").click(function () {
        showRandomQuote();
    });
});

function showRandomQuote() {
    var randomNum = Math.floor((Math.random() * 20));
    $.getJSON("https://jsonblob.com/api/jsonBlob/d82d9345-34c0-11e7-ae4c-6beae9fe30f9", function (data) {
        $(".quote-text").fadeOut(function() {
            $(this).html(quotesHtmlCode + data.quotes[randomNum].text).fadeIn();
        });
        
        $(".author").fadeOut(function() {
            $(this).html("- " + data.quotes[randomNum].author).fadeIn();
        });
    });
};