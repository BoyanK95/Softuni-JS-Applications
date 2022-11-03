window.addEventListener('DOMContentLoaded', onLoadHtml)

function onLoadHtml() {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
        document.getElementById('guest').style.display = 'none'
    }else{
        document.getElementById('guest').style.display = 'incline-block'
        
    }
}