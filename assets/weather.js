// glocal vriables
const searchButton = $("#search-button");
const searchCity = $("#search-city");
const clearHistory = $("#clear-history");
const currentWeather = $("current-weather");
const currentCity = $("current-city");
const temperature = $("temperature");
const humidity = $("humidity");
const windSpeed = $("wind-speed");
const UVIndex = $("uv-index");

var city = ""


var APIkey = "4c83c9f681a7fa3a6c27e2526f343718";

//set up AJAX call
var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid" + APIkey;

function currentWeather(city)
$.ajax ({
    url:queryURL,
    method: "GET"
}).then(function(response){

});

console.log("URL:" + queryURL)

//convert temp to F
var tempF = (response.main.temp - 273.15) * 1.80 + 32;
