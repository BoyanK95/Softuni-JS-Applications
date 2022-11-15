import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const rootEl = document.getElementById("allCats");

const catTemplate = html`
  <ul>
    ${cats.map((cat) => createCatCard(cat))}
  </ul>
`;

render(catTemplate, rootEl)


function createCatCard(cat) {
  return html`
    <li>
      <img
        src="./images/${cat.imageLocation}.jpg"
        width="250"
        height="250"
        alt="Card image cap"
      />
      <div class="info">
        <button @click=${showContent} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
          <h4>Status Code: ${cat.statusCode}</h4>
          <p>${cat.statusMessage}</p>
        </div>
      </div>
    </li>
  `;
}

function showContent(e) {
    const btn = e.target
    const hiddenDiv = e.target.parentElement.querySelector('div')
    if (hiddenDiv.style.display == 'none') {
        hiddenDiv.style.display = 'block'
        btn.textContent = 'Hide status cod'
    }else{
        hiddenDiv.style.display = 'none'
        btn.textContent = 'Show status code'
    }
}
