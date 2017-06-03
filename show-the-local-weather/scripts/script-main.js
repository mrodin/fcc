function getIPGeolocation() {
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        updateLocation(data.city, data.country);
    });
};

function updateLocation(city, country) {
    $(".city").html(city);
    $(".country").html(country);
};

$(document).ready(function() {
    getIPGeolocation();
});