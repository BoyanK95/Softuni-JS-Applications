async function getInfo() {
    const stopIDInput = document.getElementById('stopId');
    const stopId = stopIDInput.value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    const stopNameEl = document.getElementById('stopName')
    const busList = document.getElementById('buses')
    
    busList.innerHTML = ''
    stopIDInput.value = ''
    try{
        const responce = await fetch(url)
        const data = await responce.json()
    
    
        stopNameEl.textContent = data.name
    
        Object.entries(data.buses).forEach(([busNumber, timeArrive]) =>{
            const li = document.createElement('li')
            li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes`
            busList.appendChild(li)
        })
    } catch (e) {
        stopNameEl.textContent = 'Error'
    }

    
}