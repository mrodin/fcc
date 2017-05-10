var quotesHTMLCode = "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>";

$(document).ready(function () {
    $.getJSON("https://jsonblob.com/d82d9345-34c0-11e7-ae4c-6beae9fe30f9", function (data) {
        
    });

    $('[name="new-quote"]').click(function () {
        $(".quote-text").html(quotesHTMLCode + "test");
    });
});