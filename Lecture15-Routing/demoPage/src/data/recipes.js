import { get } from "./api.js"

const endpoints = {
    'recipes': '/data/recipe',
    'byId': '/data/recipe',
}

export async function getAll() {
    return get(endpoints.recipes)
}

export async function getbyId(id) {
    return get(endpoints.byId + id)
    
}