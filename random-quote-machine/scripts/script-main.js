$(document).ready(function () {
    showRandomQuote();

    $("[name=\"new-quote\"]").click(function () {
        showRandomQuote();
    });

    $("[name=\"twitter\"]").click(function () {
        window.open(
            shareOnTwitter(),
            "_blank"
        );
    });
});

function showRandomQuote() {
    var randomNum = Math.floor((Math.random() * 20));
    $.getJSON("https://jsonblob.com/api/jsonBlob/d82d9345-34c0-11e7-ae4c-6beae9fe30f9", function (data) {
        $(".quote-text").fadeOut("slow", function() {
            $(this).html(data.quotes[randomNum].text).fadeIn("slow");
        });
        
        $(".author").fadeOut("slow", function() {
            $(this).html("- " + data.quotes[randomNum].author).fadeIn("slow");
        });
    });
};

function shareOnTwitter() {
    var quote = $(".quote-text").html();
    var author = $(".author").html();

    return "https://twitter.com/intent/tweet?text=" + quote + " " + author;
}