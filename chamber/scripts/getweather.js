// select HTML elements in the document
const currentTemp = document.querySelector('#currentweather');
const weatherIcon = document.querySelector('#weather-icon');

const curTemp = document.querySelector('#ctemp');
const curDesc = document.querySelector('#cdesc');
const highTemp = document.querySelector('#hight');
const lowTemp = document.querySelector('#lowt');
const humidity = document.querySelector('#hum');
const sunRise = document.querySelector('#srise');
const sunSet = document.querySelector('#sset');

const todayFC = document.querySelector('#todayfc');
const tomorrowFC = document.querySelector('#tomorrowfc');
const nextFC = document.querySelector('#nextfc');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const lat = '33.1976';
const lon = '-96.6153';
const units = 'imperial';
const key = '18fee8773bf49897569e2f795ea56213';
const cnt = '24';
const urlCurrent = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&APPID=${key}`;
const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&cnt=${cnt}&APPID=${key}`;

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

apiFetch(urlCurrent);
fetchForecastAPI();

function displayResults(data) {
    // currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    //pull data points out of json
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    curTemp.innerHTML = data.main.temp;
    curDesc.innerHTML = desc;
    highTemp.innerHTML = data.main.temp_max;
    lowTemp.innerHTML = data.main.temp_min;
    humidity.innerHTML = data.main.humidity;

    let srise = new Date(data.sys.sunrise * 1000);
    sunRise.innerHTML = srise.toLocaleTimeString();
    let sset = new Date(data.sys.sunset * 1000);
    sunSet.innerHTML = sset.toLocaleTimeString();

}

function displayForecast(data) {
    //
    const today = new Date();
    let dowtoday = today.getDay();
    let temptoday = -100;
    let dowtomorrow = dowtoday + 1;
    let temptomorow = -100;
    let downext = dowtoday + 2;
    let tempnext = -100;

    data.list.forEach(item => {
        if (new Date(item.dt * 1000).getDay() == dowtoday) {
            if (item.main.temp > temptoday ) {
                temptoday = item.main.temp
            }

        } else if (new Date(item.dt * 1000).getDay() == dowtomorrow) {
            if (item.main.temp > temptomorow) {
                temptomorow = item.main.temp
            }

        } else if (new Date(item.dt * 1000).getDay() == downext) {
            if (item.main.temp > tempnext) {
                tempnext = item.main.temp
            }
        }


    });

    todayFC.innerHTML = temptoday;

        tomorrowFC.innerHTML = ` ${days[dowtomorrow]}: ${temptomorow}`;
    nextFC.innerHTML = ` ${days[downext]}: ${tempnext}`;
}

async function fetchForecastAPI() {
    try {
        let response = await fetch(urlForecast);
        if (response.ok) {
            let data;
            try {
                data = await response.json();
            }
            catch (jsonError) {
                throw new Error(`Invalid JSON: ${jsonError.message}`);
            }
            //console.log(data); // testing only
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}