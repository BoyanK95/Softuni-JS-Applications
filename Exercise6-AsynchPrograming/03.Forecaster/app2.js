function attachEvent() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/'
    const forecastDiv = document.getElementById('forecast')
    const currentDiv = document.getElementById('current')
    const upcomingDiv = document.getElementById('upcoming')
    let todaysDiv = createTag('div', null, 'forecasts')
    let threeDayForecast = createTag('div',null, 'forecast-info')

    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
  
    }

    const submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', onClick)

    async function onClick() {
        todaysDiv.innerHTML = ''
        threeDayForecast.innerHTML = ''
        let location = document.getElementById('location').value

        try{
            const res = await fetch(`${baseUrl}locations`)
            const data = await res.json()

            let searched = data.find(l => l.name == location)

            let todayForecast = await fetch(`${baseUrl}today/${searched.code}`)
            let todayData = await todayForecast.json()

            let upcomingForecast = await fetch(`${baseUrl}today/${searched.code}`)
            let upcomingData = upcomingForecast.json()
        }catch(err){
            todaysDiv.innerHTML = '';
            threeDayForecast.innerHTML = '';
            forecastDiv.style.display = 'block';
            let errorSpan = document.createElement('span');
            errorSpan.textContent = 'Error';
            forecastDiv.appendChild(errorSpan);
        }
    }



    function createTag(tag, text, className) {
        let el = document.createElement(tag)
        if (text) {
            el.textContent = text
        }
        if (className) {
            el.className = className
        }
        return el
    }


}