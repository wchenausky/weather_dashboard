// glocal vriables
const searchButton = $("#search-button");
const searchCity = $("#search-city");
const clearHistory = $("#clear-history");
const currentCity = $("current-city");
const temperature = $("temperature");
const humidity = $("humidity");
const windSpeed = $("wind-speed");
const UVIndex = $("uv-index");
var city = ""
var sCity = []

function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUppercase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}
//Sets API key
var APIkey = "4c83c9f681a7fa3a6c27e2526f343718";
// Display current and future weather
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val(),trim();
        currentWeather(city);
    }
}
//set up AJAX call
function currentWeather(city){

var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid" + APIkey;
$.ajax ({
    url:queryURL,
    method: "GET"
}).then(function(response){

});
}

console.log("URL:" + queryURL)

//convert temp to F
var tempF = (response.main.temp - 273.15) * 1.80 + 32;
