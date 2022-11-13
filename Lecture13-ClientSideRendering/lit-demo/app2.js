import { html, render } from './node_modules/lit-html/lit-html.js'


const tableRow = ({name, id}) => html`
<tr>
    <td>${name}</td>
    <td><button>Delete</button></td>
</tr>`

const data = [
    {
        name:'Misho',
        id:'asd1',
    },
    {
        name:'Rafo',
        id:'asd2',
    },
    {
        name:'Poko',
        id:'asd3',
    }
]

const table = (items) => html`
<table>
    ${tableRow(items[0])}
    ${tableRow(items[1])}
    ${tableRow(items[2])}
</table>`

const root = document.querySelector('main')

render(table(data),root)