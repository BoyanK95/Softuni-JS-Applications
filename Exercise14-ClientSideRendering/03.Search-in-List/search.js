import { html, render} from './node_modules/lit-html/lit-html.js'
import { towns } from './towns.js'

const townsRoot = document.getElementById('towns')
const resultRoot = document.getElementById('result')
const btn = document.querySelector('button')
btn.addEventListener('click', search)

update()

function searchTemplate(towns, match) {
   const ul = html`
   <ul>
      ${towns.map(town => createLiTemplate(town, match))}
   </ul>
   `
   return ul
}

function createLiTemplate(town, match) {
   return html`
         <li class="${match && town.toLowerCase().includes(match) ? 'active' : ''}">${town}</li>
   `
}

function update(text) {
   const ul = searchTemplate(towns, text)
   render(ul, townsRoot)
}

function search(e) {
   const textInput = document.getElementById('searchText')
   const text = textInput.value.toLowerCase()
   update(text)
   updateCount()
   textInput.value = ''
}

function updateCount() {
   const count = document.querySelectorAll('.active').length
   const countEl = count ? html`<p>${count} matches found</p>` : ''

   render(countEl, resultRoot)
}


