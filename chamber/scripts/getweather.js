// select HTML elements in the document
const currentTemp = document.querySelector('#currentweather'); //div

const todayFC = document.querySelector('#todayfc');
const tomorrowFC = document.querySelector('#tomorrowfc');
const nextFC = document.querySelector('#nextfc');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const lat = '33.1976';
const lon = '-96.6153';
const units = 'imperial';
const key = '18fee8773bf49897569e2f795ea56213';
const cnt = '24';
const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&APPID=${key}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&cnt=${cnt}&APPID=${key}`;

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

    //weather icon
    let weatherIcon = document.createElement('img'); 
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('id', 'weather-icon');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    //paragraph to host text
    let weatherText = document.createElement('p');

    //current temp text
    let curTemp = document.createElement('span');
    curTemp.setAttribute('id', 'ctemp');
    curTemp.innerHTML = `${data.main.temp} &deg;F<br>`;
    weatherText.appendChild(curTemp);

    //current condition description    
    let curDesc = document.createElement('span');
    curDesc.setAttribute('id', 'cdesc');
     curDesc.innerHTML = `${desc}<br>`;
    weatherText.appendChild(curDesc);

    let highTemp = document.createElement('span');
    highTemp.setAttribute('id', 'hight');
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;<br>`;
    weatherText.appendChild(highTemp);

    let lowTemp = document.createElement('span');
    lowTemp.setAttribute('id', 'lowt');
    //Low: <span id="lowt">54</span>&deg;<br>
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;<br>`;
    weatherText.appendChild(lowTemp);

    let humidity = document.createElement('span');
    humidity.setAttribute('id', 'hum');
    //Humidity: <span id="hum">34</span>%<br>
    humidity.innerHTML = `Humidity: ${data.main.humidity}%<br>`;
    weatherText.appendChild(humidity);

    let sunRise = document.createElement('span');
    let srise = new Date(data.sys.sunrise * 1000);
    sunRise.setAttribute('id', 'srise');
    //Sunrise: <span id="srise"></span><br>
    sunRise.innerHTML = `Sunrise: ${srise.toLocaleTimeString()}<br>`;
    weatherText.appendChild(sunRise);

    let sunSet = document.createElement('span');
    let sset = new Date(data.sys.sunset * 1000);
    sunSet.setAttribute('id', 'sset');
    //Sunset:<span id="sset"></span>
    sunSet.innerHTML = `Sunset: ${sset.toLocaleTimeString()}`;
    weatherText.appendChild(sunSet);
   
    currentTemp.appendChild(weatherIcon);
    currentTemp.appendChild(weatherText);
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