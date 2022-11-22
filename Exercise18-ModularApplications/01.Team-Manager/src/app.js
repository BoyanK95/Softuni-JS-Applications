import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'
import { homeView } from './views/homeView.js'
import { registerView } from './views/registerView.js'
import { loginView } from './views/loginview.js'
import { teamHomeView } from './views/teamHomeView.js'
import { browserView } from './views/browserView.js'
import { editView } from './views/createView.js'
import { myteamView } from './views/myTeamView.js'

const rootEl = document.getElementsByTagName('main')[0]

page('/',middleWare, homeView)
page('/index.html',middleWare, homeView)
page('/login',middleWare, loginView)
page('/register',middleWare, registerView)
page('/browse',middleWare, browserView)
page('/edit/:id',middleWare, editView)
page('/my-team',middleWare, myteamView)
page('/team-home',middleWare, teamHomeView)

page.start()

function middleWare(ctx, next) {
    ctx.render = (content) => render(content, rootEl)

    next()
}