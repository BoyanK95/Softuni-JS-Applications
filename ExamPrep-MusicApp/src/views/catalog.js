import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (items) => html` 
        <section id="catalogPage">
            <h1>All Albums</h1>
            ${items.length > 0 ?
            items.map(i => cardTemplate(i)):
            html`<p>No Albums in Catalog!</p>`}

        </section>`

const cardTemplate = (item) => {
  return html`
  <div class="card-box">
                <img src=${item.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">${item.name}</p>
                        <p class="artist">${item.artist}</p>
                        <p class="genre">${item.genre}</p>
                        <p class="price">${item.price}</p>
                        <p class="date">${item.releaseDate}</p>
                    </div>
                    <div class="btn-group">
                        <a href="/details/${item._id}" id="details">Details</a>
                    </div>
                </div>
            </div>`
}

export async function showCatalog(ctx) {
  const items = await getAll();
  ctx.render(catalogTemplate(items));
}
