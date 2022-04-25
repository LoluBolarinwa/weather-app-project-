// document.querySelector(".date").addEventListener("click", changeDate);


// const city_name = req.body.city_name;
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=" + unit + "&appid=" + apiKey + "";

// const cityQuery = req.body.cityName;

// const weatherData = JSON.parse(data)
// let fetchWeather = {
//     // urlData : ,
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=ibadan&units=metric&appid=499fdbe9589fa74bbc8ac7c0a5e9cb0f").then((response) => response.jsom)
// }

const weatherApi = {    
    apiKey: "499fdbe9589fa74bbc8ac7c0a5e9cb0f",

    fetchWeather: function(city){
        const unit = "metric";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + /*city_name*/city + "&units=" + unit + "&appid=" + this.apiKey+ "")
    .then((response) => response.json())
    .then((apiData) => this.weatherData(apiData));
    },

  weatherData: function(apiData) {
    
    // displayWeather:  function(apiData){
        // const weatherData  = JSON.parse(data);
        const { name } = apiData;
        const { icon, description } = apiData.weather[0];
        const { temp, humidity } = apiData.main;/*weatherData.weather[0];*/
        const { speed, deg, gust } = apiData.wind;
        const { country } = apiData.sys;
        console.log(name,country, temp,humidity,icon, description); 

        document.querySelector("#city-js").innerText = name + ",";
        document.querySelector("#country-js").innerHTML = country;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".weatherDescription").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp;




    }
};


// const displayWeather = function(data){
//         function displayDate(){
    
//         }
// }

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weatherDate = new Date();
let month = months[weatherDate.getMonth()];
document.getElementById("Date").innerHTML = month + " "+weatherDate.getDate() + ", "+weatherDate.getFullYear();














// function changeDate() {
//     var cjange = document.querySelector(".date").innerHTML;
//     this.cjange = "<strong>Javascript</strong>";
// }


// document.querySelector("h1")[0].innerHTML = " I like your smile";
