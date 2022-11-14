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
        src="./images/cat100.jpg"
        width="250"
        height="250"
        alt="Card image cap"
      />
      <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="100">
          <h4>Status Code: 100</h4>
          <p>Continue</p>
        </div>
      </div>
    </li>
  `;
}
