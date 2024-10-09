
const apiKey = "447ff07c407a48aae9c512481b678e47";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
weatherIcon.src = "image/weath1.webp";
}
else if(data.weather[0].main == "Clear"){
weatherIcon.src = "image/weath2.png";
}
else if(data.weather[0].main == "Rain"){
weatherIcon.src = "image/weath3.png";
}
else if(data.weather[0].main == "Mist"){
weatherIcon.src = "image/weath4.png";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})