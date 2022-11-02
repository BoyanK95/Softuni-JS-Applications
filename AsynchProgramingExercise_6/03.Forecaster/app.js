const enumIcon = {
  "Sunny": "&#x2600", // ☀
  "Partly sunny": "&#x26C5", // ⛅
  "Overcast": "&#x2601", // ☁
  "Rain": "&#x2614", // ☂
  "Degrees": "&#176", // °
};

function attachEvents() {
  document.getElementById("submit").addEventListener("click", getWeather);
}
async function getWeather() {
  const url = "http://localhost:3030/jsonstore/forecaster/locations";
  const cityName = document.getElementById("location").value;

  const responce = await fetch(url);
  const data = await responce.json();

  const info = data.find((x) => x.name === cityName);

  createForecaster(info.code);
}

async function createForecaster(code) {
  const currentSection = document.getElementById("current");
  const forecastContainer = document.getElementById('forecast')
  forecastContainer.style.display = 'block';

  const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
  const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

  //TODO use Promise.all

  const resToday = await fetch(urlToday);
  const dataToday = await resToday.json();

  const resUpcoming = await fetch(urlUpcoming);
  const dataUpcoming = await resUpcoming.json();

  const todayHtmlTemp = createToday(dataToday);
  currentSection.appendChild(todayHtmlTemp);

  const upcomingHtmlTemp = createUpcoming()
}

function createUpcoming(data) {
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${data}`

    const divContainer = document.getElementById('div')
    divContainer.classList.add('forecast-info')
    
}
function generateSpans(data) {
  const { condition, high, low } = data.forecast;

    const spanHolder = document.createElement('span')
    spanHolder.classList.add('upcoming')

    const iconSpan = document.createElement('span')
    iconSpan.classList.add('symbol')
    iconSpan.innerHTML = enumIcon[condition]

    
}

function createToday(data) {
  const { condition, high, low } = data.forecast;
  
  const conditionContainer = document.createElement("div");
  conditionContainer.classList.add("forecast");

  const conditionIconSpan = document.createElement("span");
  conditionIconSpan.classList.add("condition", 'symbol');
  conditionIconSpan.innerHTML = enumIcon[condition];

  const conditionSpan = document.createElement("span");
  conditionSpan.classList.add("condition");

  const nameSpan = document.createElement("span");
  nameSpan.classList.add("forecast-data");
  nameSpan.textContent = data.name;

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("forecast-data");
  tempSpan.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;

  const conditionTxtSpan = document.createElement("span");
  conditionTxtSpan.classList.add("forecast-data");
  conditionTxtSpan.textContent = condition;

  conditionSpan.appendChild(nameSpan);
  conditionSpan.appendChild(tempSpan);
  conditionSpan.appendChild(conditionTxtSpan);

  conditionContainer.appendChild(conditionIconSpan);
  conditionContainer.appendChild(conditionSpan);
  return conditionContainer;
}

attachEvents();
