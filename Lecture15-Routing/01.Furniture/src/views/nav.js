import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector("nav");

const navTemplate = (hasUser) => html` 
<a id="catalogLink" href="/catalog">Dashboard</a>
    ${hasUser ? html`
    <div id="user">
    <a id="createLink" href="create.html">Create Furniture</a>
    <a id="profileLink" href="my-furniture.html">My Publications</a>
    <a @click=${onLogout} id="logoutBtn" href="javascript:void(0)">Logout</a>
  </div>` 
  :html`
  <div id="guest">
    <a id="loginLink" href="/login" >Login</a>
    <a id="registerLink" href="register">Register</a>
  </div>`
  }`;

export function updateNav() {
  const user = getUserData();

  render(navTemplate(user), nav);
}

function onLogout() {
  logout();
  updateNav();
  page.redirect("/");
}
