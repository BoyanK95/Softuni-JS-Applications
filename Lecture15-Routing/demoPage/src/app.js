import page from '../node_modules/page/page.mjs'
import { showAbout } from './views/about.js'
import { showCatalog } from './views/catalog.js'
import { showContact } from './views/contact.js'
import { showDetails } from './views/details.js'
import { showHome } from './views/home.js'
import { notFount } from './views/notFound.js'

function decorateContext(ctx, next) {
    ctx.render = function (content) {
    document.querySelector('main').innerHTML = content
    }
    next()
}

page(decorateContext)
page('/index.html', '/')
page('/', showHome)
page('/catalog', showCatalog)
page('/catalog/:categoryId/:productId', showDetails)
page('/about', showAbout)
page('/contact*',showContact)
page('*', notFount)


page.start()