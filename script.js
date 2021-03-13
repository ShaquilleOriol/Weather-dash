var APIKey = "90d9dceb3e8bf632b11e6dd3d525674a"
var openWeather = "https://api.openweathermap.org/data/2.5/weather?q="

var searchEl = document.querySelector("#searchBtn");
var currentCity = document.querySelector("#citySearch");


function getCityWeather(event) {
    event.preventDefault();

    var weatherUrl = openWeather + currentCity.value + "&units=imperial&appid=" + APIKey;
    console.log(weatherUrl);

    fetch(weatherUrl)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

           
            var city = document.querySelector(".city");
            console.log(city);
            city.textContent = data.name;
            console.log(data.name);

            
            var date = document.querySelector(".date");
            var day = new Date().toLocaleDateString()
            date.textContent = "(" + day + ")";
            console.log(day);

            
            var temp = document.querySelector(".temperture");
            temp.textContent = "Temperture: " + data.main.temp + "°F";
            console.log(data.main.temperture)

            
            var humidity = document.querySelector(".humidity")
            humidity.textContent = "Humidity:" + " " + data.main.humidity + "%";
            console.log(humidity);

          
            var windSpeed = document.querySelector(".windspeed")
            windSpeed.textContent = "Wind Speed:" + " " + data.wind.speed + "mph";
            console.log(windspeed);

           
            var uvIndex = document.querySelector(".uv")
            uvIndex.textContent = "UV Index:";
            console.log(windspeed);
        })

    // LocalStorage Setup to call searched cities 
    var city = [];
    var citySearch = document.querySelector('.city');
    console.log(citySearch);
    console.log(city);
    localStorage.setItem("city", JSON.stringify(citySearch));


};




searchEl.addEventListener("click", getCityWeather);

// var APIKey = "90d9dceb3e8bf632b11e6dd3d525674a"
// var openWeather = "https://api.openweathermap.org/data/2.5/weather?q="