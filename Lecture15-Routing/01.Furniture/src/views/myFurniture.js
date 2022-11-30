import { html, nothing } from '../lib.js'
import { search } from '../api/data.js'


const myFurnitureTemplate = (items) => html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${items.map(i => myFurnitureCard(i))}
        </div>
    </div>`

const myFurnitureCard = (item) => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img ${item.img} />
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${item._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>`


export async function showMyFurniture(ctx) {
    const id = ctx.user._id
    const result = await search(id)
    ctx.render(myFurnitureTemplate(result))

}