 export function chekUserNav() {
    const username = sessionStorage.getItem('username')
    if (username) {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'none')
        document.getElementById('logout-link').style.display = 'inline'
        document.getElementById('welcome-msg').style.display = 'inline'
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`
        
    } else {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'inline')
        document.getElementById('logout-link').style.display = 'none'
        document.getElementById('welcome-msg').style.display = 'none'
    }
 }