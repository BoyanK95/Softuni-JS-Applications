import { showHome } from "./src/home.js"

const main = document.getElementById('mainView')

const registerView = document.getElementById('registerView')
const loginView = document.getElementById('loginView')
const dashboard = document.getElementById('dashboard-holder')
const detailsView = document.getElementById('detailsView')
const createView = document.getElementById('createView')
const defSection = document.getElementById('defSection').remove()

const link = {
    '/': showHome,
    '/catalog': dashboard,
    '/login': loginView,
    '/register': registerView,
    '/details': detailsView,
    '/create': createView,
}

const context = {
    showSection
}

window.showHome = showHome
window.context = context

function showSection(section) {
    main.replaceChildren(section)
}

// showHome(context)