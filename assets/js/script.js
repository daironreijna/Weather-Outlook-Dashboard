// API key
// source: Stephen James (2019)

// latitude
const lat = 44.34;
// longitude
const lon = 10.99;
// Pulling secret API Key from config.js
const API_KEY = config.key;

let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

//console.log(queryURL);

// use queryURL in order to get data from OpenWeather API

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.list[0].main.temp);

    var todayDiv = $("#today");

    todayDiv.text(`Temp: ${data.list[0].main.temp}  // °C Precipitation: ${data.list[0].pop} //Wind: ${data.list[0].wind.speed}KMPH 
    //
    Humidity: ${data.list[0].main.humidity}%`);
    
    console.log(data);
    console.log(data.list[0].main.temp);

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
