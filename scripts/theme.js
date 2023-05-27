const theme = document.querySelector('.theme');

const r = document.querySelector(':root');

function getColor(){
    let rs = getComputedStyle(r);
    console.log(rs.getPropertyValue('--background'));
}
function lightMode() {
    getColor();
    r.style.setProperty('--background', '#fff');
    r.style.setProperty('--color', '#232323');
    theme.innerHTML = '<svg id="darkMode" data-name="Layer 2" id="Layer_2" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"/></svg>';
    theme.classList.remove('dark');
    theme.style.width = '25px';
    theme.style.height = '25px';

    document.querySelector('.bar-container').style.backgroundColor = '#fff';
    document.querySelector('.bar-container .bar-completed').style.backgroundColor = 'var(--border)';
    document.querySelector('.login-box').style.backgroundColor = '#fff';
}
function darkMode() {
    getColor();
    r.style.setProperty('--background', '#232323');
    r.style.setProperty('--color', '#fff');
    theme.classList.add('dark');
    theme.style.width = '30px';
    theme.style.height = '30px';
    theme.innerHTML = '<svg id="lightMode" enable-background="new 0 0 32 32" id="Outline" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g><path d="M16,26c-5.514,0-10-4.486-10-10S10.486,6,16,6s10,4.486,10,10S21.514,26,16,26z M16,8c-4.411,0-8,3.589-8,8s3.589,8,8,8   s8-3.589,8-8S20.411,8,16,8z"/><rect height="4" width="2" x="15"/><rect height="4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.5269 6.1006)" width="2" x="5.101" y="4.101"/><rect height="2" width="4" y="15"/><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.5268 11.8995)" width="4" x="4.101" y="24.9"/><rect height="4" width="2" x="15" y="28"/><rect height="4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.7279 25.8994)" width="2" x="24.9" y="23.9"/><rect height="2" width="4" x="28" y="15"/><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.272 20.1005)" width="4" x="23.9" y="5.101"/></g></svg>';

    document.querySelector('.bar-container').style.backgroundColor = 'var(--border)';
    document.querySelector('.bar-container .bar-completed').style.backgroundColor = '#fff';
}

theme.addEventListener('click', () => {
    if(theme.classList.contains('dark')){ // to light mode
        lightMode();
    }else{ // to dark mode
        darkMode();
    }
})

