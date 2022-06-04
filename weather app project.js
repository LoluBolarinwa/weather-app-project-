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
        const { speed } = apiData.wind;
        const { country } = apiData.sys;
        console.log(name,country, temp,humidity,speed,icon, description); 

        document.querySelector("#city-js").innerText = name + ",";
        document.querySelector("#country-js").innerHTML = country;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".weatherDescription").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp.toFixed(1) + "°C";             //truncate temperature value to single decimal place
        document.querySelector(".humidity").innerHTML = "Humidity: "+ humidity + "%";
        document.querySelector("#speed").innerText =  "Wind: " + speed + "km/h";

        document.querySelector("#section").classList.remove("loading");
// Different Images Based on Weather Description
if (description == "clear sky") {
        document.body.style.backgroundImage = "url('public/images/desktop/clearsky1.jpg')";
} else if (description.includes('clouds') == true) {
    document.body.style.backgroundImage = "url('public/images/desktop/thunderstorm.jpg')";
}
else if (description.includes() == " scattered clouds") {
    document.body.style.backgroundImage = "url('public/images/desktop/scatteredclouds1.jpg')";
}
else if (description == " broken clouds" ) {
    document.body.style.backgroundImage = "url('public/images/desktop/snow4.jpg')";
}
else if (description == "light rain") {
    document.body.style.backgroundImage = "url('public/images/desktop/snow4.jpg')";
}
else if (description == "overcast clouds") {
    document.body.style.backgroundImage = "url('public/images/desktop/noaa-99F4mC79j1I-unsplash.jpg')";
}
else if (description == "thunderstorm") {
    document.body.style.backgroundImage = "url('public/images/desktop/pexels-pixabay-268791.jpg')";
}
else if (description == "snow") {
    document.body.style.backgroundImage = "url('public/images/desktop/pexels-pixabay-268791.jpg')";
}
else if (description == "mist") {
    document.body.style.backgroundImage = "url('public/images/desktop/pexels-pixabay-268791.jpg')";
}


    },

    // backgroundPictures: function(){
    //     if (this.description == "clear sky") { }
    // },

    search: function() {
        this.fetchWeather(document.getElementById('city-name-js').value);
        // var city_name = "";
        // city_name = document.getElementById('city-name-js').value;
        // this.fetchWeather(city_name);
    },
};

function searchURL(){
        weatherApi.search();
  };

  /* To display weather to vienna on Refresh or first visit */
  weatherApi.fetchWeather("Vienna");

  /* To Make Enter key Search for city */
var inputSearch = document.getElementById('city-name-js');
inputSearch.addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weatherApi.search();   
    }
});

// function changeBackPicture(params) {
//     call inner function
// }
  


// document.querySelector(".button").addEventListener("click", function(){
//         weatherApi.search();   
            // var val = document.querySelector(".inputSearch").value;
            // console.log(val);
        // });



        
// const displayWeather = function(data){
//         function displayDate(){
    
//         }
// }

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weatherDate = new Date();
let month = months[weatherDate.getMonth()];
document.getElementById("Date").innerHTML = month + " "+weatherDate.getDate() + ", "+weatherDate.getFullYear();



