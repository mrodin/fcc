var quotesHTMLCode = "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>";

$(document).ready(function () {
    $('[name="new-quote"]').click(function () {
        $(".quote-text").html(quotesHTMLCode + "test");
    });
});