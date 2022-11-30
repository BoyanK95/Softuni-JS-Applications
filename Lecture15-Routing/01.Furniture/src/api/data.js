import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/catalog')
}

export async function getById(id) {
    return get('/data/catalog/' + id)
}

export async function deleteById(id) {
    return del('/data/catalog/' + id)
}

export async function createInstance(data) {
    return post('/data/catalog', data)
}

export async function editInstance(id, data) {
    return put('/data/catalog/' + id, data)
}

export async function search(id) {
    return get(`/data/catalog?where=_ownerId%3D%22${id}%22`)
}

