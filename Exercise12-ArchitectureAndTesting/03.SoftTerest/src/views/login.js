import {login} from '../api/user.js'

const section = document.getElementById('loginView')
const form = section.querySelector('form')
form.addEventListener('submit', onSubmit)

export function showLogin(context) {
    context.showSection(section)
}

function onSubmit(e) {
    e.preventDefault()
    
}