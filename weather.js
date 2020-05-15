const weatherKey = 'cf94f6ea0c9b381575a0c1c2c9bb75b9';
function Weather() {
    if(localStorage.getItem('coords')===null) {
        getCurrentLoc(); 
    }
    var jCoords = localStorage.getItem('coords');
    var coords = JSON.parse(jCoords);
    var lat = coords['latitude'];
    var lon = coords['longitude'];
    getWeather(lat, lon);
    printWeather();

    setTimeout(Weather, 3600000);
}

function printWeather() {
    var jWeather = localStorage.getItem('Weather');
    var Weather = JSON.parse(jWeather);
    var img = '<img src="http://openweathermap.org/img/wn/';
    img += Weather['icon'];
    img += '@2x.png">';

    var html = '<h3>';
    html += Weather['loc'];
    html += '&nbsp&nbsp&nbsp&nbsp&nbsp';
    html += Weather['temp'];
    html += 'C&nbsp&nbsp&nbsp&nbsp&nbsp';
    html += img;
    html += '</h3>';
    document.querySelector('#weather_box').innerHTML = html;
}

function getCurrentLoc() {
    navigator.geolocation.getCurrentPosition(function(pos) {
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;
        var coords = {
            latitude,
            longitude
        };
        localStorage.setItem('coords', JSON.stringify(coords));
    });
}

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`
    ).then(function(response) {
        response.json().then(function(json) {
            var Weather = {
                'temp' : json.main.temp,
                'loc' : json.name,
                'icon' : json.weather[0].icon
            };
            localStorage.setItem('Weather', JSON.stringify(Weather));
        })
    });
}

Weather();