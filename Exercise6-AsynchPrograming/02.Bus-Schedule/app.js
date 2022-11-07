function solve() {
    const url = 'http://localhost:3030/jsonstore/bus/schedule/'
    const infoDiv = document.querySelector('.info')
    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')

    let Id = 'depot'
    let stopName = ''

    async function depart() {
        const responce = await fetch(`${url}${Id}`)
        const res = await responce.json()
        stopName = res.name
        
        infoDiv.textContent = `Next stop ${stopName}`
        departBtn.disabled = true
        arriveBtn.disabled = false
        
    }

    function arrive() {
        infoDiv.textContent = `Arriving at ${stopName}`;
        
        departBtn.disabled = false
        arriveBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();