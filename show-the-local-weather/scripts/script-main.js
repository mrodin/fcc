function updateWeatherReport() {
    $.getJSON("http://ip-api.com/json/?callback=?", function (data) {
        var city = data.city;
        var country = data.country;
        var lat = data.lat;
        var lon = data.lon;
        var OWMApiCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=70a046fe2789d2e4e3bb919260264d96"; //OpenWeatherMap API Call

        updateLocation(city, country);
        $.getJSON(OWMApiCall, function (data) {
            var tempInKelvin = data.main.temp;
            
            $(".tempvalue").html(convertKelvinToCelsius(tempInKelvin));
        });
    });
};

function updateLocation(city, country) {
    $(".city").html(city);
    $(".country").html(country);
};

function convertKelvinToCelsius(temp) {
    return Math.round(temp - 273.15);
}

$(document).ready(function () {
    updateWeatherReport();
});