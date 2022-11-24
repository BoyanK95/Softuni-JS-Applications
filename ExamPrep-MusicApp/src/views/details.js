import { deleteById, getById } from '../api/data.js'
import { html, nothing } from '../lib.js'

const detailsTemplate = (pet, hasUser, canDonate, isOwner, onDelete) => html`
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="./images/Lorde.jpg">
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: Melodrama</h1>
                        <h3>Artist: Lorde</h3>
                        <h4>Genre: Pop Music</h4>
                        <h4>Price: $7.33</h4>
                        <h4>Date: June 16, 2017</h4>
                        <p>Description: Melodrama is the second studio album by New Zealand singer-songwriter Lorde.
                            It was released on 16 June 2017 by Lava and Republic Records and distributed through
                            Universal.</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    <div class="actionBtn">
                        <a href="#" class="edit">Edit</a>
                        <a href="#" class="remove">Delete</a>
                    </div>
                </div>
            </div>
        </section>`

function petControls(pet, hasUser, canDonate, isOwner, onDelete) {
    if (hasUser == false) {
        return nothing
    }

    if (isOwner) {
        return html`
         <div class="actionBtn">
            <a href="/edit/${pet._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        </div>`
    }

    if (canDonate) {
        return html`
            <div class="actionBtn">
                 <a href="#" class="donate">Donate</a>
            </div>`
    }
}


export async function showDetails(ctx) {
    const id = ctx.params.id
    const pet = await getById(id)

    
    const hasUser = Boolean(ctx.user)
    const isOwner = hasUser && ctx.user._id == pet._ownerId
    const canDonate = true
    
    ctx.render(detailsTemplate(pet, hasUser, canDonate, isOwner, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this')
        
        if (choice) {
            await deleteById(id)
            ctx.page.redirect('/')
        }
    }
}