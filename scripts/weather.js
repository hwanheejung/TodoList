function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const WEATHER_API = config.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        document.querySelector('#location').innerText = data.name;
        document.querySelector('#temp').innerText = data.main.temp + `˚C`;
        document.querySelector('#main').innerText = data.weather[0].main;
        document.querySelector('#temp_minmax').innerText = `max: ${data.main.temp_max}˚C / min: ${data.main.temp_min}˚C`;
    })
}
function onGeoError(){
    alert("위치정보를 찾을 수 없습니다. 날씨를 이용하실 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

