window.addEventListener('DOMContentLoaded', onLoadHtml)
const addBtn = document.querySelector('add')
document.getElementById('logout').addEventListener('click', onLogout)

async function onLogout() {
    const url = 'http://localhost:3030/users/logout'

    const header = getHeader('GET', '')

    const res = await fetch(url, header)
    sessionStorage.clear()
    onLoadHtml()
}

function onLoadHtml() {
    const token = sessionStorage.getItem('accessToken')
    const userName = document.querySelector('p.email span')
    const addBtn = document.querySelector('.add')
    if (token) {
        document.getElementById('guest').style.display = 'none'
        document.getElementById('user').style.display = 'inline-block'
        userName.innerHTML = sessionStorage.getItem('email')
        addBtn.disabled = false
    }else{
        document.getElementById('guest').style.display = 'inline-block'
        document.getElementById('user').style.display = 'none'
        userName.innerHTML = 'guest'
        addBtn.disabled = true
    }
}
function createCath(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData()
    const data = Object.fromEntries(formData)
    onCreateCatch(data)
}

function getHeader(method, body) {
    const token =  sessionStorage.getItem('accessToken')
    const header = {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
    }
    if (body) {
        header.body = JSON.stringify(body)
    }
    return header
}

async function onCreateCatch(body) {
    const url = 'http://localhost:3030/data/catches'
    const header = getHeader('POST', body)
    const res = await fetch(url)
    const data = await res.json()
    return data
}