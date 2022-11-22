import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/data.js";

let contenxt = null
export async function loginView(ctx) {
    contenxt = ctx
    ctx.render(createLoginTemplate())
}

async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {email, password} = Object.fromEntries(formData)
    try {
        await login(email,password)
        contenxt.updateNav()
        contenxt.page.redirect('/')
    } catch (error) {
        return contenxt.render(createLoginTemplate(error.message))
    }
}

function createLoginTemplate(error) {
  return html` <section id="login">
    <article class="narrow">
      <header class="pad-med">
        <h1>Login</h1>
      </header>
      <form @submit=${onSubmit} id="login-form" class="main-form pad-large">
        ${error ? html`<div class="error">${error}</div>`: ''}
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <input class="action cta" type="submit" value="Sign In" />
      </form>
      <footer class="pad-small">
        Don't have an account? <a href="#" class="invert">Sign up here</a>
      </footer>
    </article>
  </section>`;
}
