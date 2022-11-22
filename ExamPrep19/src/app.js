import { render, page } from "./lib.js";

page('/', ()=> console.log('home'))

page.start()