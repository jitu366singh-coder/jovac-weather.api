const apiKey = "c8e5d25715312096700004f297cb415c";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city==""){

        alert("Please Enter City Name");

        return;

    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    if(data.cod=="404"){

        alert("City Not Found");

        return;

    }

    document.getElementById("cityName").innerHTML=data.name;

    document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";

    document.getElementById("condition").innerHTML=data.weather[0].main;

    document.getElementById("humidity").innerHTML=data.main.humidity+" %";

    document.getElementById("wind").innerHTML=data.wind.speed+" km/h";

}