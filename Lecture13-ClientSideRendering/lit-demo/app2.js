import { html, render } from './node_modules/lit-html/lit-html.js'


const tableRow = ({name, id}) => html`
<tr>
    <td>${name}</td>
    <td><button @click=${onDelete.bind(null, id)}>Delete</button></td>
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
    ${items.map(tableRow)}
</table>`

const root = document.querySelector('main')

render(table(data),root)

function onDelete(id) {
    data.splice(data.findIndex(x => x.id == id),1)
    render(table(data), root)
}