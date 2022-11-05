//get data from REST service
//parse and display each recipe

export async function getAllRecipe(params) {
    const responce = await fetch('http://localhost:3030/data/recipes?select='+ encodeURIComponent('_id, name'))
    const recipies = await responce.json()

    return recipies
}