const API_KEY = "YOUR_API_KEY_HERE";

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url =
`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("temp").innerHTML =
        `${data.current.temp_c}°C`;

        document.getElementById("location").innerHTML =
        `${data.location.name}, ${data.location.country}`;

        document.getElementById("condition").innerHTML =
        data.current.condition.text;

        document.getElementById("humidity").innerHTML =
        `${data.current.humidity}%`;

        document.getElementById("wind").innerHTML =
        `${data.current.wind_kph} km/h`;

        document.getElementById("icon").src =
        "https:" + data.current.condition.icon;

    }
    catch(error){
        alert("City not found");
        console.log(error);
    }
}