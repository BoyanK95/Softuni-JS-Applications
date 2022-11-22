import { render, page } from "./lib.js";
import { showHome } from "./views/home.js";

const main = document.getElementById('content')


page(decorateContent)
page('/', showHome)
page('/catalog', ()=> console.log('catalog'))
page('/catalog/:id', ()=> console.log('details'))
page('/edit/:id', ()=> console.log('edit'))
page('/create', ()=> console.log('create'))
page('/login', ()=> console.log('login'))
page('/register', ()=> console.log('register'))

page.start()

function decorateContent(ctx, next) {
    ctx.render = renderMain

    next()
}

function renderMain(content) {
    render(content, main)
}