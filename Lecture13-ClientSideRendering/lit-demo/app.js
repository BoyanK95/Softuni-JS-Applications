import { html, render } from "./node_modules/lit-html/lit-html.js";


const timer = (time) => html`<p>The time is ${time}</p>`
const message = () => html`<p>Static message <span>Magick</span></p>`
const root = document.querySelector('main')


function showMagic() {
    render(message(), root)
}

function update() {
    render(timer(new Date()), root)
    
}
document.querySelector('button').addEventListener('click', update)
document.querySelectorAll('button')[1].addEventListener('click', showMagic)

