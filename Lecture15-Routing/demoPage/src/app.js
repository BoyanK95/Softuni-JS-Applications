import page from '../node_modules/page/page.mjs'
import { showAbout } from './views/about.js'
import { showCatalog } from './views/catalog.js'
import { showContact } from './views/contact.js'
import { showHome } from './views/home.js'
import { notFount } from './views/notFound.js'

function firstHandler(ctx, next) {
    
}

page('/index.html', '/')
page('/', showHome)
page('/catalog', showCatalog)
page('/about', showAbout)
page('/contact*',showContact)
page('*', notFount)


page.start()
