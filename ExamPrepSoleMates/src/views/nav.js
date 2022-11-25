import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector("nav");

const navTemplate = (hasUser) => html` 
        <div>
            <a href="/catalog">Dashboard</a>
            <a href="/search">Search</a>
        </div>

          <!-- Logged-in users -->
        <div class="user">
            <a href="#">Add Pair</a>
            <a href="javascript:void(0)">Logout</a>
        </div>

          <!-- Guest users -->
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`;

export function updateNav() {
    const user = getUserData()

    render(navTemplate(user), nav);
}


function onLogout() {
    logout()
    updateNav()
    page.redirect('/')
}