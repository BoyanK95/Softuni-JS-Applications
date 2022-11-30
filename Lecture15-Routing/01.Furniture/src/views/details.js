import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (item, isOwner, onDelete) => html` 
<div class="container">
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${item.img} />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${item.make}</span></p>
      <p>Model: <span>${item.model}</span></p>
      <p>Year: <span>${item.year}</span></p>
      <p>Description: <span>${item.description}</span></p>
      <p>Price: <span>${item.price}</span></p>
      <p>Material: <span>${item.material}</span></p>
      ${isOwner ? html`
      <div>
        <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
      </div>` : nothing}
      
    </div>
  </div>
</div>`;



export async function showDetails(ctx) {
  const id = ctx.params.id;
  const item = await getById(id);

  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && ctx.user._id == item._ownerId;

  ctx.render(detailsTemplate(item, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this");

    if (choice) {
      await deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
}
