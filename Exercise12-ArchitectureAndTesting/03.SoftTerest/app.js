import { showHome } from "./src/views/home"

const main = document.getElementById('main')

const homeView = document.getElementById('homeView')
const registerView = document.getElementById('registerView')
const loginView = document.getElementById('LoginView')
const dashboard = document.getElementById('dashboard-holder')
const detailsView = document.getElementById('detailsView')
const createView = document.getElementById('createView')
const defSection = document.getElementById('defSection').remove()

const links = {
    "/": homeView,
    "/catalog": dashboard,
    "/login": loginView,
    "/register": registerView,
    "/detail": detailsView,
    "/create": createView
}
window.showHome = showHome
window.context = context

function showSection(section) {
    main.appendChild(section)
}