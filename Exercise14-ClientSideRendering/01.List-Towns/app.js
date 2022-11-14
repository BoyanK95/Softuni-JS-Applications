import { html, render } from './node_modules/lit-html/lit-html.js'


const form = document.querySelector('form')
form.addEventListener('submit', onSubmit)
const rootEl = document.getElementById('root')

function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const {towns} = Object.fromEntries(formData)
    const townArr = towns.split(', ')
    renderTownList(townArr)
}

function renderTownList(data) {
    const res = createTownList(data)
    render(res, rootEl)
}

function createTownList(data) {
    const ul = html`
    <ul>
        ${data.map(el => html`<li>${el}</li>`)}
    </ul>`

    return ul
}