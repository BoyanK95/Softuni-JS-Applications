import { html } from "../../node_modules/lit-html/lit-html.js"

const  catalogTemplate = () => html`
<h2>Catalog Page</h2>`


export function showContact(ctx) {
    ctx.render(catalogTemplate()) 
}