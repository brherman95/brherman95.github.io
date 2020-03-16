const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5010198a7ccffc1141920945a4c4dea2";
fetch(apiURL)
  .then((response) => response.json())

  .then((jsObject) => {
    console.log(jsObject);
    const temperature = parseFloat(Math.round(jsObject.list[0].main.temp));
    const windspeed = parseFloat(Math.round(jsObject.list[0].wind.speed));
    document.getElementById('currently').textContent = jsObject.list[0].weather[0].main;
    document.getElementById('temp').textContent = temperature;
    document.getElementById('high').textContent = Math.round(jsObject.list[0].main.temp_max);
    document.getElementById('windspeed').textContent = windspeed;
    document.getElementById('humidity').textContent = Math.round(jsObject.list[0].main.humidity);

    if (temperature <= 50 && windspeed >= 3) {
      const windchill = Math.round((35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))).toFixed(2));
      document.getElementById('windchill').textContent = windchill;

    } else {
      const windchill = ('N/A');
      document.getElementById('windchill').textContent = windchill;
      document.getElementById('degree').style.display = 'none';
    }

    for (i = 0; i <= 39; i++) {
      if (jsObject.list[i].dt_txt.includes("18:00:00")) {
        const fulldate = jsObject.list[i].dt_txt.replace(' 18:00:00', '');
        const date = new Date(fulldate);
        const day = date.getDay();
        const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let forcastitem = document.createElement('section');
        let dayofweek = document.createElement('div');
        let icondiv = document.createElement('div');
        let weathericon = document.createElement('img');
        let temp = document.createElement('div');

        dayofweek.textContent = weekday[day];
        dayofweek.setAttribute('class', 'day')
        icondiv.setAttribute('class', 'weathericon')
        weathericon.setAttribute('src', 'http://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x.png');
        weathericon.setAttribute('alt', jsObject.list[i].weather[0].description);
        temp.textContent = Math.round(jsObject.list[i].main.temp) + "\u2109";

        forcastitem.appendChild(dayofweek);
        forcastitem.appendChild(icondiv);
        icondiv.appendChild(weathericon);
        forcastitem.appendChild(temp);



        document.querySelector('div.forecast').appendChild(forcastitem);


      }
    }

  });