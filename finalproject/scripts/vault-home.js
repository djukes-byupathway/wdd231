import { currentyear, lastModified, displayDates } from '../scripts/getdates.mjs';

displayDates();

   

const modal = document.getElementById('formSignup');
const openBtn = document.getElementById('openSignUp');
const myClose = document.querySelector("#dialogClose");



myClose.addEventListener("click", () => modal.close());

// Open the modal when the trigger button is clicked
openBtn.addEventListener('click', () => {
    modal.showModal();
});


const lat = '33.1976';
const lon = '-96.6153';
const units = 'imperial';
const key = '18fee8773bf49897569e2f795ea56213';
const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&APPID=${key}`;

const curTemp = document.getElementById('currentWeather');
const leftFoot = document.getElementById("left");

async function apiFetch(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            //console.log(data); // testing only
            displayResults(data); // uncomment when ready
            //
            // return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    // currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    //pull data points out of json

    //weather icon
    let weatherIcon = document.createElement('img');
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('id', 'weather-icon');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    //current temp text
    curTemp.innerHTML = `Current Temp: ${data.main.temp} &deg;F<br>`;
    left.appendChild(weatherIcon);
}

apiFetch(urlCurrent);





/* 

const namesForm = document.getElementById('namesForm');
namesForm.addEventListener('submit', () => { fetchNames(event) });
async function fetchNames(event) {
    event.preventDefault();
    console.log("debuging this.")
    const formData = new FormData(event.target)
    console.log(formData.get('gender'));
    console.log(formData.get('country'));
    console.log(formData.get('numNames'));

    const urlName = `https://api.parser.name/?api_key=14d2dccb4e74d7440696f5d8451b1f23&endpoint=generate&gender=${formData.get('gender')}&results=${formData.get('numNames')}&country_code=${formData.get('country')}`;
    console.log(urlName);

    try {
        let response = await fetch(urlName);
        if (response.ok) {
            let data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
            //
            // return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
};
 */