const temperature = parseFloat(document.getElementsByClassName('t').textContent);
const windspeed = parseFloat(document.getElementsByClassName('ws').textContent);

if(temperature <= 50 && windspeed >= 3){
    const windchill = (35.74 + (0.6215*temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))).toFixed(2); 
    document.getElementsByClassName('wc').textContent = windchill;
}
else {
    const windchill = ('N/A');
    document.getElementsByClassName('wc').textContent = windchill;
}


