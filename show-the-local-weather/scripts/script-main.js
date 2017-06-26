function updateWeatherReport() {
    $.getJSON("http://ip-api.com/json/?callback=?", function (data) {
        var city = data.city;
        var country = data.country;
        var lat = data.lat;
        var lon = data.lon;

        // OpenWeatherMap API Call
        var OWMApiCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=70a046fe2789d2e4e3bb919260264d96";

        updateLocation(city, country);
        $.getJSON(OWMApiCall, function (data) {
            var tempInKelvin = data.main.temp;
            var weatherDescription = data.weather[0].main;
            var unit = document.getElementById("unit");

            $(".tempvalue").html(convertKelvinToCelsius(tempInKelvin));
            $(".wi").addClass(convertWeatherToWiCss(weatherDescription));

            unit.onclick = function () {
                var currentUnit = unit.innerHTML;
                
                if (currentUnit === "C") {
                    this.innerHTML = "F";
                }
            };
        });
    });
};

function updateLocation(city, country) {
    $(".city").html(city);
    $(".country").html(country);
};

function convertKelvinToCelsius(temp) {
    return Math.round(temp - 273.15);
};

// converts API weather description to Weather Icon CSS class
function convertWeatherToWiCss(weather) {
    var WiIcon = "";
    switch (weather) {
        case "Thunderstorm":
            WiIcon = "wi-day-thunderstorm";
            break;
        case "Drizzle":
            WiIcon = "wi-day-showers";
            break;
        case "Rain":
            WiIcon = "wi-day-rain";
            break;
        case "Snow":
            WiIcon = "wi-day-snow";
            break;
        case "Atmosphere":
            WiIcon = "wi-day-fog";
            break;
        case "Clear":
            WiIcon = "wi-day-sunny"
            break;
        case "Clouds":
            WiIcon = "wi-day-cloudy"
            break;
        case "Extreme":
            WiIcon = "wi-tornado";
            break;
        default:
            WiIcon = "wi-cloud";
    }
    return WiIcon;
};

$(document).ready(function () {
    updateWeatherReport();
});