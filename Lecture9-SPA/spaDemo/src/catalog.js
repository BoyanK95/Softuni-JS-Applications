import { showDetailsView } from "./details.js"

//get data from REST service
//parse and display each recipe

document.getElementById('recipe-list').addEventListener('click', openRecipe)
document.getElementById('catalog-link').addEventListener('click', showCatalogView)

export async function showCatalogView() {
    [...document.querySelectorAll('section')].forEach(s=> s.style.display = 'none')

    const recipes = await getAllRecipes()

    document.getElementById('catalog-view').style.display = 'block'

    displayRecipes(recipes)
}

 async function getAllRecipes() {
    const responce = await fetch('http://localhost:3030/data/recipes?select=' + encodeURIComponent('_id,name'))
    const recipies = await responce.json()

    return recipies
}

 function displayRecipes(recipies) {
   const cards = recipies.map(createRecipeCard)

   const fragment = document.createDocumentFragment()
   for (let item of cards) {
        fragment.appendChild(item)
   }

   const list = document.getElementById('recipe-list')
   list.replaceChildren(fragment)
}

function createRecipeCard(recipe) {
    const element = document.createElement('li')
    element.textContent = recipe.name

    const link = document.createElement('a')
    link.href = 'javascript:void(0)'
    link.text = '[Details]'
    link.id = recipe._id
    element.appendChild(link)

    return element
}

function openRecipe(ev) {
    if (ev.target.tagName == 'A') {
        ev.preventDefault()
        const id = ev.target.id
        showDetailsView(id)
    }
}
