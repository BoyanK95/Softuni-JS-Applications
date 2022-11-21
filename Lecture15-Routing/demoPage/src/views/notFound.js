import { html } from "../../node_modules/lit-html/lit-html.js"


const notFountTemplate = () => html`<h2>404 Not Found</h2>`


export function notFount(ctx) {
    ctx.render(notFountTemplate())
}