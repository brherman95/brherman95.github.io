var currentdate = new Date();
var dayofweek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var monthsofyear = new Array("Januray", "February", "March", "April", "May", "June", "July", "August", "Septemeber", "October", "November", "December");
var fulldate = dayofweek[currentdate.getDay()] + ", " + currentdate.getDate() + " " + monthsofyear[currentdate.getMonth()] + " " + currentdate.getFullYear();
document.getElementsByClassName('currentdate').innerHTML = fulldate;