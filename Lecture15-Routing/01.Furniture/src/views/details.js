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
          <img src="/images/chair.jpg" />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>make</span></p>
      <p>Model: <span>model</span></p>
      <p>Year: <span>year</span></p>
      <p>Description: <span>description</span></p>
      <p>Price: <span>price</span></p>
      <p>Material: <span>material</span></p>
      ${isOwner ? html`
      <div>
        <a href="”#”" class="btn btn-info">Edit</a>
        <a href="”#”" class="btn btn-red">Delete</a>
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
