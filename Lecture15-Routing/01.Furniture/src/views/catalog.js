import { getAll } from "../api/data.js";
import { html, nothing } from "../lib.js";

const catalogTemplate = (items, hasUser) => html` 
      <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="/images/table.png" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>235 $</span></p>
                            </footer>
                            <div>
                                <a href=”#” class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="/images/sofa.jpg" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>1200 $</span></p>
                            </footer>
                            <div>
                                <a href=”#” class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="/images/chair.jpg" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>55 $</span></p>
                            </footer>
                            <div>
                                <a href=”#” class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

const cardTemplate = (item, hasUser) => {
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

                    ${hasUser ? 
                      html`<div class="btn-group">
                        <a href="/details/${item._id}" id="details">Details</a>
                    </div>` :
                    nothing
                    }

                    
                </div>
            </div>`
}

export async function showCatalog(ctx) {
  const items = await getAll();
  const hasUser = !!ctx.user
  ctx.render(catalogTemplate(items, hasUser));
}
