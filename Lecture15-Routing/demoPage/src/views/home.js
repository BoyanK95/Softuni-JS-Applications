export function showHome(ctx, next) {
    ctx.render(`<h2>Home Page</h2><button>Click me for contact</button>`)
    document.querySelector('button').addEventListener('click', ()=>{
        ctx.page.redirect('/contacts')
    })
}