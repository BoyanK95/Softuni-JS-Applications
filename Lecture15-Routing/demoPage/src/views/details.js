import { html } from "../../node_modules/lit-html/lit-html.js"
import { getbyId } from "../data/recipes.js"


const detailsTemplate = (recipe) => html`
    <h2>Product details</h2>
    <h3>${recipe.name}</h3>
    <img src=${'/'+ recipe.img}>
    <h3>Ingredients</h3>
    <ul>
        ${recipe.ingredients.map(i => html`<li>${i}</li>`)}
    </ul>
        <h3>Preparation Steps</h3>
    <ul>
    ${recipe.steps.map(s => html`<li>${s}</li>`)}
    </ul>`
    


export async function showDetails(ctx) {
    const id = ctx.params.Id
    
    const recipe = await getbyId(id)
    ctx.render(detailsTemplate(recipe))
}