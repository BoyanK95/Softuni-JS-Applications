import { html } from "../../node_modules/lit-html/lit-html.js"


const homeTemplate = () => html`
<h2>Home Page</h2>
<h3>This is my Page Demo cook book SPA</h3>`



export function showHome(ctx, next) {
    ctx.render(homeTemplate())
    }
