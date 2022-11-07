async function getAllRecipes() {
    const res = await fetch('http://localhost:3030/jsonstore/cookbook/recipes')
    const recipes = await res.json()

    return Object.values(recipes)
}

async function getRecipeById(id) {
    const res = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id)
    const recipe = await res.json()

    return recipe
}

