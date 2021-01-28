$(document).ready(function () {
  $("#search-button").on("click", function () {
    var cityInput = $("#search-city").val();
    // empties search input
    $("#search-city").val("");

    currentWeather(cityInput);
  });

  $(".list-cities").on("click", "li", function () {
    currentWeather($(this.text()));
  });

  function makeRow(text) {
    var liEl = $("<li>").addClass("list-cities-item-action").text(text);
    $(".list-cities").append(liEl);
  }

  var APIkey = "&appid=4c83c9f681a7fa3a6c27e2526f343718";
  // Display current and future weather
  function displayWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim() !== "") {
      (city = searchCity.val()), trim();
      currentWeather(city);
    }
  }
  //Sets API key
var APIkey = "&appid=4c83c9f681a7fa3a6c27e2526f343718";

//set up AJAX call
function currentWeather(cityInput) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + APIkey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}


});


