//TODO! use the document.read function.

/*$(document).ready(function () {
*/
// latitude
let lat = 44.34;
// longitude
let lon = 10.99;
// Pulling secret API Key from config.js
const API_KEY = config.key;

// use queryURL in order to get data from OpenWeather API
let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
let searchString = "";
let cityNumber = 0;
let searchHistory = [];
let searchHistoryContainer = $("#history");
searchHistoryContainer.addClass("d-grid gap-2");
let searchForm = $("#search-form");


// // the day of today 
// console.log(dayjs()); // everything as an object

// console.log(dayjs().$d); // example - Sat Sep 16 2023 18:02:19 GMT+0100 (British Summer Time)

// console.log(dayjs().$d.getDate()); // the day e.g. today is 16.09.23 so expected output is 16

let todayYearMonthDate = dayjs().format('YYYY-MM-DD'); //2023-09-16

let unixFormat = dayjs().unix();

let convertUnix
//   console.log(todayYearMonthDate);
// console.log(unixFormat);
// console.log(convertUnix);

let unix_timestamp = 1694887200;
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date(unix_timestamp * 1000);

// starts true but once function has been called will turn to false
let createCards = new Boolean(true);


// the search history function should load as the page loads, in essence, if there is any local storage history it should be populated. 
// however if there is no history, then button should be populated on the fly. 
// so this should be handled by $(".search-button").on("click", function (event) {  

/*
// fill the Cards if they are created. 
if (!createCards) {
  console.log("Current idea is to fill cards with info after they have been populated, based on the last clicked button")
}
*/

function getCoordinates(searchString) {
  let weatherCoordURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=5&appid=${API_KEY}`

  fetch(weatherCoordURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data[0]) {
        alert("Location not found")
      } else {
        // append history to local storage

        // if (searchHistory.indexOf(searchString) !== -1) {
        //   return
        // }
        //searchHistory.push(searchString);

        //localStorage.setItem("search-history", JSON.stringify(searchString));

      }
      console.log(data);

      localStorage.setItem("weatherCoordUrl", JSON.stringify(data));

      lat = data.lat;
      lon = data.lon;
      console.log(lat, lon);
    })
}

// to get data from local storage 
window.onload = function (event) {
  event.preventDefault();
  //searchHistory.filter(function(val) { return val !== null; }).join(", ")

  for (let index = 1; index < JSON.parse(localStorage.getItem(`cities`)) + 1; index++) {
    event.preventDefault();
    searchHistory.push(localStorage.getItem(`cityNumber${index}`));
    console.log("{" + localStorage.getItem(`cityNumber${index}`) + "}");

    // TODO create one function that generatesButtons which can becalled here, and elsewhere#
    // In order to adhere to DRY principles.
    const searchBtn = $("<button>");
    searchBtn.attr("type", "button")
    searchBtn.addClass("btn btn-secondary btn-lg city-button");
    searchBtn.attr("data-city", localStorage.getItem(`cityNumber${index}`));
    searchBtn.attr("style", "color:white;");
    searchBtn.text(localStorage.getItem(`cityNumber${index}`));
    searchHistoryContainer.prepend(searchBtn);

  }

  var cityNumber = localStorage.getItem(`cities`);
  localStorage.setItem(`cities`, cityNumber);
  console.log(cityNumber);
  console.log(searchHistory);


};


document.addEventListener("DOMContentLoaded", function (event) {
  console.log("dom loaded test")

});

$(".search-button").on("click", function (event) {
  event.preventDefault()

  let searchString = $("#search-input").val().trim();

  if (!searchString) {
    return
  }

  cityNumber += 1;

  localStorage.setItem(`cityNumber${cityNumber}`, searchString);
  localStorage.setItem(`cities`, cityNumber);

  getCoordinates(searchString);

  // 1. Create a variable named "cityBtn" equal to $("<button>");
  const cityBtn = $("<button>");
  cityBtn.attr("type", "button")

  // 2. Then give each "cityBtn" and divBtn classes.

  cityBtn.addClass("btn btn-secondary btn-lg city-button");
  // 3. Then give each "cityBtn" an attribute called "data-city", with a value eqaual to "searchString"
  cityBtn.attr("data-city", searchString);
  cityBtn.attr("style", "color:white;");
  // 4. Then give each "cityBtn" a text equal to "searchString".
  cityBtn.text(searchString);
  // 6. Finally, append each "cityBtn" to the ".div".
  searchHistoryContainer.prepend(cityBtn);

  // populate information to local storage.



  //only call function if cards haven't been previously created.
  if (createCards) {
    createWeatherCards()
  }
});



$(".city-button").on("click", function (event) {
  event.preventDefault();
  console.log("city button clicked ")
  createWeatherCards();
})



fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.list[0].main.temp);

    var todayDiv = $("#today");

    // convert timestamps from unix to 

    todayDiv.text(`Temp: ${data.list[0].main.temp}  °C  // Precipitation: ${data.list[0].pop} // Wind: ${data.list[0].wind.speed}KMPH // Humidity: ${data.list[0].main.humidity}%`);

    //console.log(data);
    //console.log(data.list[0].main.temp);

    var todayDiv = $("#today");


    // dayjs().format();
    // var today = dayjs().format("YYYY-MM-DD");
    // console.log(today);

    // var unixFormat = dayjs.unix(data.dt[0]).format("D MMM YYYY");
    // console.log(unixFormat);
    // var unixFormat2 = dayjs.unix(1694811600).format("D MMM YYYY");
    // console.log(unixFormat2);
  });
// https://www.w3schools.com/jsref/prop_node_textcontent.asp
// need to use id=today
//<section id="today" class="mt-3" role="region" aria-live="polite"></section>



/*articleNumber++;
var article = $("<div>");
article.addClass("well well-lg row");
var title = $("<h3>");
title.addClass("title");
title.text(data.articles[i].title);
var description = $("<p>");
description.addClass("description");
description.text(data.articles[i].description);
var number = $("<div class='articleNumber'>").text(articleNumber);
$(article).append(number, title, description);
$("#article-results").append(article);

*/