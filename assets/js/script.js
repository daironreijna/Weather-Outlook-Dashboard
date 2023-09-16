/*$(document).ready(function () {
*/
// latitude
const lat = 44.34;
// longitude
const lon = 10.99;
// Pulling secret API Key from config.js
const API_KEY = config.key;

let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
let searchString = "";
let cityNumber = 0;

console.log(queryURL);

// the day of today 
console.log(dayjs()); // everything as an object

console.log(dayjs().$d); // example - Sat Sep 16 2023 18:02:19 GMT+0100 (British Summer Time)

console.log(dayjs().$d.getDate()); // the day e.g. today is 16.09.23 so expected output is 16

todayYearMonthDate = dayjs().format('YYYY-MM-DD'); //2023-09-16

unixFormat = dayjs().unix();

convertUnix =
  console.log(todayYearMonthDate);
console.log(unixFormat);
console.log(convertUnix);

let unix_timestamp = 1694887200
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);

console.log(date)
// use queryURL in order to get data from OpenWeather API

$(".search-button").on("click", function (event) {
  //$("#article-results").empty();
  event.preventDefault()
  cityNumber += 1;
  let searchString = $("#search-input").val();
  localStorage.setItem(`cityNumber${cityNumber}`, searchString)
  // 1. Create a variable named "cityBtn" equal to $("<button>");
  let cityBtn = $("<button>");
  let divBtn = $("#history");
  // 2. Then give each "cityBtn" and divBtn classes.

  cityBtn.addClass("btn btn-secondary btn-lg");
  divBtn.addClass("d-grid gap-2")
  // 3. Then give each "cityBtn" an attribute called "data-city", with a value eqaual to "searchString"
  cityBtn.attr("data-city", searchString);
  cityBtn.attr("style", "color:white;");
  // 4. Then give each "cityBtn" a text equal to "searchString".
  cityBtn.text(searchString);
  // 6. Finally, append each "cityBtn" to the ".hr".
  divBtn.append(cityBtn);

  $("#search-input").empty();
});
/*
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    //console.log(data.list[0].main.temp);

    var todayDiv = $("#today");

    // convert timestamps from unix to 

    todayDiv.text(`Temp: ${data.list[0].main.temp}  °C  // Precipitation: ${data.list[0].pop} //Wind: ${data.list[0].wind.speed}KMPH 
//
Humidity: ${data.list[0].main.humidity}%`);

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
articleNumber++;
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

});
});*/