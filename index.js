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
        document.body.style.backgroundImage = "url('public/images/desktop/clearsky3.jpg')";
} else if (description == "few clouds") {
    document.body.style.backgroundImage = "url('public/images/desktop/few cloud.jpg')";
    // (description.includes('clouds') == true) 
}
else if (description == "scattered clouds") {
    document.body.style.backgroundImage = "url('public/images/desktop/scattered clouds.jpg')";
}
else if (description == "broken clouds" ) {
    document.body.style.backgroundImage = "url('public/images/desktop/broken clouds1.jpg')";
}
else if (description == "overcast clouds" ) {
    document.body.style.backgroundImage = "url('public/images/desktop/overcast cloud.jpg')";
}
else if (description == "drizzle") {
    document.body.style.backgroundImage = "url('public/images/desktop/drizzle2.jpg')";
}
else if (description == "light rain") {
    document.body.style.backgroundImage = "url('public/images/desktop/rain light.jpg')";
}
else if (description == "moderate rain") {
    document.body.style.backgroundImage = "url('public/images/desktop/rain moderate.jpg')";
}
else if (description == "heavy rain") {
    document.body.style.backgroundImage = "url('public/images/desktop/rain heavy2.jpg')";
}
else if (description == "thunderstorm") {
    document.body.style.backgroundImage = "url('public/images/desktop/thunderstorm2.jpg')";
}
else if (description == "snow") {
    document.body.style.backgroundImage = "url('public/images/desktop/snow.jpg')";
}
else if (description == "light snow") {
    document.body.style.backgroundImage = "url('public/images/desktop/shower snow.jpg')";
}
else if (description == "heavy snow") {
    document.body.style.backgroundImage = "url('public/images/desktop/snow7.jpg')";
}
else if (description == "smoke") {
    document.body.style.backgroundImage = "url('public/images/desktop/smoke.jpg')";
}
else if (description == "mist") {
    document.body.style.backgroundImage = "url('public/images/desktop/mist.jpg')";
}
else if (description == "haze") {
    document.body.style.backgroundImage = "url('public/images/desktop/haze.jpg')";
}
else if (description == "fog") {
    document.body.style.backgroundImage = "url('public/images/desktop/fog.jpg')";
}
else if (description == "sand") {
    document.body.style.backgroundImage = "url('public/images/desktop/sand.jpg')";
}
else if (description == "dust") {
    document.body.style.backgroundImage = "url('public/images/desktop/dust.jpg')";
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
inputSearch.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        document.getElementById("btn").click();
        // weatherApi.searchURL();
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



