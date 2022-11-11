 import { showHome } from "./src/home"

const main = document.getElementById('mainView')

const homeView = document.getElementById('homeView')
const registerView = document.getElementById('registerView')
const loginView = document.getElementById('loginView')
const dashboard = document.getElementById('dashboard-holder')
const detailsView = document.getElementById('detailsView')
const createView = document.getElementById('createView')
const defSection = document.getElementById('defSection').remove()

const link = {
    '/': homeView,
    '/catalog': dashboard,
    '/login': loginView,
    '/register': registerView,
    '/details': detailsView,
    '/create': createView,
}

function showSection(section) {
    main.replaceChildren(section)
}