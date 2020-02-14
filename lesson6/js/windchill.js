const temperature = parseFloat(document.getElementById('t').textContent);
const windspeed = parseFloat(document.getElementById('ws').textContent);

if(temperature <= 50 && windspeed >= 3){
    const windchill = (35.74 + (0.6215*temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))).toFixed(2); 
    document.getElementById('wc').textContent = windchill;
}
else {
    const windchill = ('N/A');
    document.getElementById('wc').textContent = windchill;
}


