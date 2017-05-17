var colors = ["#993233", "#4dce00", "#9a33cc", "37afc0", "1060d3", "f66922", "e7536b", "008f3f"];

$(document).ready(function () {
    showRandomQuote();
    colorTransition();

    $("[name=\"new-quote\"]").click(function () {
        showRandomQuote();
        colorTransition();
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
    var author = $(".author").html().replace("- ", "-");

    return "https://twitter.com/intent/tweet?text=" + quote + " " + author;
}

function colorTransition() {
    var randColor = colors[Math.floor((Math.random() * colors.length))];
    $("button").css("background-color", randColor);
    $(".quote").css("color", randColor);
    $(".author").css("color", randColor);
    $(".fa-quote-left").css("color", randColor);
}