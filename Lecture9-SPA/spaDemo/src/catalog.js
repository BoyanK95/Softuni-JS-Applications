//get data from REST service
//parse and display each recipe

export async function getAllRecipe(params) {
    const responce = await fetch('http://localhost:3030/data/recipes?select='+ encodeURIComponent('_id, name'))
    const recipies = await responce.json()

    return recipies
}

function displayRecipes(recipies) {
   const cards = recipies.map(createRecipeCard)

   const fragment = document.createDocumentFragment()

   for (let item of cards) {
        fragment.appendChild(item)
   }
}

function createRecipeCard(recipe) {
    const element = document.createElement('li')
    element.textContent = recipe.name

    return element
}
