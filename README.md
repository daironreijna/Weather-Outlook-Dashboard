# <b><i><span style="color:cyan">Project 8: Weather Outlook Dashboard </span></b></i>

![Weather Dashboard Challenge Banner](./assets/images/banner-03.jpeg)
![Weather-Outlook-Dashboard](https://img.shields.io/github/languages/top/daironreijna/Weather-Outlook-Dashboard)  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)   ![Weather-Outlook-Dashboard](https://img.shields.io/github/languages/count/daironreijna/Weather-Outlook-Dashboard)

Welcome to the Weather Outlook Dashboard! In this project, I have created a web application that allows users to view the weather forecast for cities of their choosing. I have made use of the OpenWeatherMap API to retrieve weather data for cities.

## Table of Contents

- [Introduction](#introduction)
- [Technical Details](#technical-details)
- [Deployment](#deployment)
- [Motivation and Learning](#motivation-and-learning)
- [Project Learning Objectives](#project-learning-objectives)
- [Resources](#resources)
- [Repository Quality](#repository-quality)

## Introduction

Server APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. This project builds a weather outlook dashboard that runs in the browser and features dynamically updated HTML and CSS. The dashboard will allow users to see the weather forecast for multiple cities, helping them plan their trips accordingly.

![Weather Dashboard Mock-Up](./assets/images/10-server-side-apis-challenge-demo.png)

## Technical Details

- The application uses the OpenWeatherMap API to retrieve weather data.
- LocalStorage is used to store persistent data.

## Deployment

The Weather Dashboard Challenge is deployed at the following live URL:

[Weather Outlook Dashboard Live Demo](weather-outlook-dashboard.vercel.app)

The GitHub repository for this project can be found at:

[GitHub Repository](https://github.com/daironreijna/Weather-Outlook-Dashboard)

<br>
<u>In order to use this webapp, you will need to </u>

1. Create your own API key by visiting https://openweathermap.org/api
2. Create a config.js file in the asset/js folder
3. Save the API key in the below format

<b>Example:</b> 

````javascript
var config = {
	key: [YOUR_SECRET_API_KEY_GOES_HERE],
};
````
````javascript
// ===== after placing your API key ===========
var config = {
	key: "14c5e5e260e3e3432d141deb7d150ec3",
};
````
## Motivation and Learning
This project is an opportunity to apply the knowledge and skills acquired during week 8 of the course. It serves as a practical exercise to understand how to work with server APIs, retrieve and display data, and create a user-friendly web application. Additionally, this project encourages learning about data persistence using LocalStorage.

## Project Learning Objectives
By the end of this project, I have been able to:

- Understand and utilize the concept and utility of APIs and JSON in web applications.
- Build endpoint URLs to a variety of APIs.
- Work with the OpenWeatherMap 5 Day Forecast API to retrieve weather data.
- Retrieve and process data from external APIs.
- Display current and future weather conditions for selected cities.
- Store and manage data using LocalStorage for a seamless user experience.
- Enhance my skills in front-end web development, including dynamic element generation and fetch calls.
- Create a real-world application that requires understanding different coding languages, concepts and functions.

## <u>Resources</u>

<i>

- [edX Boot Camps LLC (2022) Request-Response The Full Stack Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [Hillary Nyakundi (2021) How to Write a Good README File for Your GitHub Project](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)
- [Ondrej Polesny (2020) The Fetch API Cheatsheet: Nine of the Most Common API Requests](https://www.freecodecamp.org/news/fetch-api-cheatsheet/)
- [Dillion Megida (2022) JavaScript Promises – The promise.then, promise.catch and promise.finally Methods Explained](https://www.freecodecamp.org/news/javascript-promise-methods/)
- [Dillion Megida (2020) Promises in Javascript](https://dillionmegida.com/p/javascript-promises/)
- [Stephen James (2019) How to Hide your API keys from Github! (And why you should do it!)](https://medium.com/@steves0089/how-to-hide-your-api-keys-from-github-8140e5b86148)
- [Pt. Prashant tripathi (2020) How to hide API KEY in GitHub repo](https://dev.to/ptprashanttripathi/how-to-hide-api-key-in-github-repo-2ik9)
- [Andrew Ayer (2023) git-crypt - transparent file encryption in git](https://www.agwa.name/projects/git-crypt/)
- [MDN Web Docs (n.d.) Glossary: Definitions of Web-related terms > Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [MDN Web Docs (n.d.) References > JavaScript > Guide > Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) -[StackOverFlow (2018) Question: Using click events on dynamically added DOM elements](https://stackoverflow.com/questions/54562477/using-click-events-on-dynamically-added-dom-elements)
- [StackOverFlow (2008) Event binding on dynamically created elements?](https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements)
- [jQuery (2023) Events > Understanding Event Delegation](https://learn.jquery.com/events/event-delegation/)
- [HTML5 `data-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [jQuery `.attr()` method](http://api.jquery.com/attr/).
- [Kingsley Ubah (2021) Fetch API – How to Make a GET Request and POST Request in JavaScript](https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/)
- [W3Schools (n.d.) jQuery References > jQuery HTML / CSS Methods > jQuery empty() Method](https://www.w3schools.com/jquery/html_empty.asp)
- [Justin Gage (2023) What does Vercel do?](https://vercel.com/blog/what-is-vercel)
- [JULIAN WALLIS (2022) What Is VERCEL? Is It The Right Platform For Front-End Developers?](https://webo.digital/blog/what-is-vercel-is-it-the-right-platform-for-front-end-developers/)
- [Technically (n.d.) LEARNING TRACKS: WORKING WITH DEVELOPERS](https://technically.dev/tracks/working-with-developers)
- [jQuery (no date) Categories: Manipulation > DOM Removal > .empty()](https://api.jquery.com/empty/) -[JSON Formatter (2020) Parser, Formatter, Validator & Beautifier](https://jsonformatter.org/)
- [OpenWeatherMap (n.d.) 5 day weather forecast](https://openweathermap.org/forecast5)
- [OpenWeatherMap (n.d.) Geocoding API](https://openweathermap.org/api/geocoding-api)
- [Shani Raja (2023) The Alchemy of Writing Podcast Episode 2: Blogging With Style in Toronto](https://open.spotify.com/episode/5Y8apbsyU0NOQRntOf0JZD)

</i>

## Contributing 

Coding and design completed by 

<table>
  <tr>
    <td align="center"><a href="https://github.com/daironreijna"><img src="https://avatars.githubusercontent.com/u/140647099?v=4" width="100px;" alt="headshot of Dairon Reijna"/><br /><sub><b>Dairon Reijna</b></sub></a><br /></a><a href="https://github.com/daironreijna/web-apis-pop-quiz" title="Design">🎨</a><a href="https://github.com/daironreijna/web-apis-pop-quiz" title="Code">💻</a></td>
  </tr>
</table>

<br>I welcome contributions from the community to enhance this Portfolio Project. By participating in this project, you contribute to a vibrant and inclusive environment. To ensure a positive experience the code of conduct we will adhere to is based on [The Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md). Please review and follow these guidelines when contributing.

## Accessibility Testing

I aim to develop websites that are built mobile first, with accessibility in prime focus. I welcome feedback, and would ask that you test for accessibility by visiting this page: [Accessibility Testing and Inclusive Design](./assets/Accessibility%20Testing%20and%20Inclusive%20Design.md).

## License

This project is licensed under a [MIT License](./LICENCE).

---

© 2023 Dairon Reijna. Confidential and Proprietary. All Rights Reserved.