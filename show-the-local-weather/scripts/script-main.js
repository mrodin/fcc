function updateWeatherReport() {
    $.getJSON("http://ip-api.com/json/?callback=?", function (data) {
        let city = data.city;
        let country = data.country;
        let lat = data.lat;
        let lon = data.lon;

        // OpenWeatherMap API Call
        const OWMApiCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=70a046fe2789d2e4e3bb919260264d96";

        updateLocation(city, country);
        $.getJSON(OWMApiCall, function (data) {
            let tempInKelvin = data.main.temp;
            let weatherDescription = data.weather[0].main;
            
            document.getElementById("tempvalue").innerHTML = convertKelvinToCelsius(tempInKelvin);
            $(".wi").addClass(convertWeatherToWiCss(weatherDescription));

            document.getElementById("unit").onclick = function() {
                switchTempUnit(tempInKelvin);
            };
        });
    });
};

function updateLocation(city, country) {
    document.getElementById("city").innerHTML = city;
    document.getElementById("country").innerHTML = country;
};

function convertKelvinToCelsius(temp) {
    return Math.round(temp - 273.15);
};

function convertKelvinToFahrenheit(temp) {
    return Math.round(temp * 9 / 5 - 459.67);
};

// converts API weather description to Weather Icon CSS class
function convertWeatherToWiCss(weather) {
    let WiIcon = "";
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

function switchTempUnit(temp) {
    let unit = document.getElementById("unit");
    if (unit.innerHTML === "C") {
        unit.innerHTML = "F";
        document.getElementById("tempvalue").innerHTML = convertKelvinToFahrenheit(temp);
    } else {
        unit.innerHTML = "C";
        document.getElementById("tempvalue").innerHTML = convertKelvinToCelsius(temp);
    }
}

$(document).ready(function () {
    updateWeatherReport();
});