const apiKey = "d248fe00a9758d14aa457468767596e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    let data = await response.json();
 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.scr = "/images/clears.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.scr = "/images/drizzle.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.scr = "/images/rain.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.scr = "/images/mist.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.scr = "/images/snow.png"
    }
    else if (data.weather[0].main == "Wind") {
        weatherIcon.scr = "/images/wind.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});