const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&appid=5010198a7ccffc1141920945a4c4dea2";
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4092267&units=imperial&APPID=5010198a7ccffc1141920945a4c4dea2";

fetch(apiURL)
  .then((response) => response.json())

  .then((jsObject) => {
    console.log(jsObject);
    const temperature = parseFloat(Math.round(jsObject.main.temp));
    const windspeed = parseFloat(Math.round(jsObject.wind.speed));
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = temperature;
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('windspeed').textContent = windspeed;
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);

    if (temperature <= 50 && windspeed >= 3) {
      const windchill = Math.round((35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))).toFixed(2));
      document.getElementById('windchill').textContent = windchill;

    } else {
      const windchill = ('N/A');
      document.getElementById('windchill').textContent = windchill;
      document.getElementById('degree').style.display = 'none';
    }

  });

