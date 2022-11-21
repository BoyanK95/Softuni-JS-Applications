import { html } from "../../node_modules/lit-html/lit-html.js"
import { repeat } from "../../node_modules/lit-html/directives/repeat.js"
import { getAll } from "../data/recipes.js"

const  catalogTemplate = (recipes) => html`
<h2>Catalog Page</h2>
    <ul>
        ${repeat(recipes, r => r._id, recipeCardTempalte)}
    </ul>
`

const recipeCardTempalte = (recipe) => html`
<li><a href=${`/recipes/${recipe._id}`}>${recipe.name}</a></li>`


export async function showCatalog(ctx) {
    const recipes = await getAll()
    ctx.render(catalogTemplate(recipes))
}