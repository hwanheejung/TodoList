
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

    setTimeout(weatherEmoji, 5000);
    
    
    function weatherEmoji(){
        const emoji = document.querySelector('.weatherEmoji');
        const main = document.querySelector('#main').innerText;
          
        
        if(main === 'Rain'){
            emoji.innerHTML = '<svg id="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path d="M23.5,22H8.5A6.5,6.5,0,0,1,7.2,9.14a9,9,0,0,1,17.6,0A6.5,6.5,0,0,1,23.5,22ZM16,4a7,7,0,0,0-6.94,6.14L9,11,8.14,11a4.5,4.5,0,0,0,.36,9h15a4.5,4.5,0,0,0,.36-9L23,11l-.1-.82A7,7,0,0,0,16,4Z"/><path d="M14,30a.93.93,0,0,1-.45-.11,1,1,0,0,1-.44-1.34l2-4a1,1,0,1,1,1.78.9l-2,4A1,1,0,0,1,14,30Z"/><path d="M20,30a.93.93,0,0,1-.45-.11,1,1,0,0,1-.44-1.34l2-4a1,1,0,1,1,1.78.9l-2,4A1,1,0,0,1,20,30Z"/><path d="M8,30a.93.93,0,0,1-.45-.11,1,1,0,0,1-.44-1.34l2-4a1,1,0,1,1,1.78.9l-2,4A1,1,0,0,1,8,30Z"/><rect class="cls-1"/></svg>';
        } else if(main === 'Clear'){
            emoji.innerHTML = '<svg enable-background="new 0 0 32 32" id="Outline" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g><path d="M16,26c-5.514,0-10-4.486-10-10S10.486,6,16,6s10,4.486,10,10S21.514,26,16,26z M16,8c-4.411,0-8,3.589-8,8s3.589,8,8,8   s8-3.589,8-8S20.411,8,16,8z"/><rect height="4" width="2" x="15"/><rect height="4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.5269 6.1006)" width="2" x="5.101" y="4.101"/><rect height="2" width="4" y="15"/><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.5268 11.8995)" width="4" x="4.101" y="24.9"/><rect height="4" width="2" x="15" y="28"/><rect height="4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.7279 25.8994)" width="2" x="24.9" y="23.9"/><rect height="2" width="4" x="28" y="15"/><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.272 20.1005)" width="4" x="23.9" y="5.101"/></g></svg>';
        } else if(main === 'Snow'){
            emoji.innerHTML = '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M461,349l-34-19.64a89.53,89.53,0,0,1,20.94-16,22,22,0,0,0-21.28-38.51,133.62,133.62,0,0,0-38.55,32.1L300,256l88.09-50.86a133.46,133.46,0,0,0,38.55,32.1,22,22,0,1,0,21.28-38.51,89.74,89.74,0,0,1-20.94-16l34-19.64A22,22,0,1,0,439,125l-34,19.63a89.74,89.74,0,0,1-3.42-26.15A22,22,0,0,0,380,96h-.41a22,22,0,0,0-22,21.59A133.61,133.61,0,0,0,366.09,167L278,217.89V116.18a133.5,133.5,0,0,0,47.07-17.33,22,22,0,0,0-22.71-37.69A89.56,89.56,0,0,1,278,71.27V38a22,22,0,0,0-44,0V71.27a89.56,89.56,0,0,1-24.36-10.11,22,22,0,1,0-22.71,37.69A133.5,133.5,0,0,0,234,116.18V217.89L145.91,167a133.61,133.61,0,0,0,8.52-49.43,22,22,0,0,0-22-21.59H132a22,22,0,0,0-21.59,22.41A89.74,89.74,0,0,1,107,144.58L73,125a22,22,0,1,0-22,38.1l34,19.64a89.74,89.74,0,0,1-20.94,16,22,22,0,1,0,21.28,38.51,133.62,133.62,0,0,0,38.55-32.1L212,256l-88.09,50.86a133.62,133.62,0,0,0-38.55-32.1,22,22,0,1,0-21.28,38.51,89.74,89.74,0,0,1,20.94,16L51,349a22,22,0,1,0,22,38.1l34-19.63a89.74,89.74,0,0,1,3.42,26.15A22,22,0,0,0,132,416h.41a22,22,0,0,0,22-21.59A133.61,133.61,0,0,0,145.91,345L234,294.11V395.82a133.5,133.5,0,0,0-47.07,17.33,22,22,0,1,0,22.71,37.69A89.56,89.56,0,0,1,234,440.73V474a22,22,0,0,0,44,0V440.73a89.56,89.56,0,0,1,24.36,10.11,22,22,0,0,0,22.71-37.69A133.5,133.5,0,0,0,278,395.82V294.11L366.09,345a133.61,133.61,0,0,0-8.52,49.43,22,22,0,0,0,22,21.59H380a22,22,0,0,0,21.59-22.41A89.74,89.74,0,0,1,405,367.42l34,19.63A22,22,0,1,0,461,349Z"/></svg>';
        } else if(main === 'Thunderstorm'){
            emoji.innerHTML = '<svg id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon points="309.5,256 257.5,256 277.5,192 224.5,192 202.5,291 243.8,291 213.5,384  "/><g><path d="M328.4,176.7c-2.7,0-5.4,0-8,0.3c-7.9-35-39.1-61.4-76.4-61.4c-43.3,0-78.3,35.2-78.3,78.5c0,2.6,0.1,5.2,0.4,7.8    c-26.4,2.3-47.1,25.7-47.1,52.8c0,28.6,23.2,53.3,51.7,53.3H182v-17h-11.3c-9.5,0-18.5-4.1-25.4-11c-6.8-7-10.6-16.3-10.6-26    c0-18.6,14.5-33.8,33.2-36.9c1.6-0.3,8.8-1.3,14.2-1.8c0,0-0.5-5.3-0.6-9.6c-0.1-4.3-0.1-9.4-0.1-11.5c0-34.6,28.1-62.7,62.6-62.7    c14.5,0,28.1,4.8,39.3,13.9c10.9,8.9,18.6,21.3,21.7,34.9l3.1,14l14.2-1.8c2.1-0.3,4.1-0.4,6.1-0.4c26.9,0,48.8,22.3,48.8,49.4    c0,27.1-21.9,49.4-48.8,49.4H320v17h8.4c35.7,0,64.6-30.1,64.6-65.9C393,206.4,364.1,176.7,328.4,176.7z"/></g></g></svg>';
        } else if(main === 'Drizzle'){
            emoji.innerHTML = '<svg class="feather feather-cloud-drizzle" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="8" x2="8" y1="19" y2="21"/><line x1="8" x2="8" y1="13" y2="15"/><line x1="16" x2="16" y1="19" y2="21"/><line x1="16" x2="16" y1="13" y2="15"/><line x1="12" x2="12" y1="21" y2="23"/><line x1="12" x2="12" y1="15" y2="17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>';
            document.querySelector('.weatherEmoji svg').style.fill = 'none';
        } else if(main === 'Clouds'){
            emoji.innerHTML = '<svg data-name="Layer 2" id="Layer_2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><path d="M29,19a6,6,0,0,1-6,6H7.5a4.5,4.5,0,0,1-.21-8.99,7,7,0,1,1,13.67-2.65A5.762,5.762,0,0,1,23,13,6,6,0,0,1,29,19Z" style="fill:none"/><path d="M23,12a7.015,7.015,0,0,0-1.23.107A7.929,7.929,0,0,0,14,6a8.009,8.009,0,0,0-8,8,8.154,8.154,0,0,0,.087,1.188A5.5,5.5,0,0,0,7.5,26H23A7,7,0,0,0,23,12Zm0,12H7.5a3.5,3.5,0,0,1-.164-6.991,1,1,0,0,0,.913-1.284A6.014,6.014,0,0,1,14,8a5.942,5.942,0,0,1,5.964,5.446,1,1,0,0,0,1.347.85A4.8,4.8,0,0,1,23,14,5,5,0,0,1,23,24Z" style="fill:var(--color)"/></svg>';
            
        }
    
    
    }
}
function onGeoError(){
    alert("위치정보를 찾을 수 없습니다. 날씨를 이용하실 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


