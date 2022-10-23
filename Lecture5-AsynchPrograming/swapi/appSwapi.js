document
  .getElementById("load-charachter")
  .addEventListener("click", loadCharachter);

function loadCharachter() {
  let baseUrl = "https://swapi.dev/api";

  fetch(`${baseUrl}/people/15`)
    .then((responce) => responce.json())
    .then((character) => {
      console.log(character);
    });
}

function oldloadCharachter() {
  let baseUrl = "https://swapi.dev/api";

  let promise = fetch(`${baseUrl}/people/15`);

  console.log(promise);

  promise.then((responce) => {
    let jsonResponce = responce.json();
    jsonResponce.then((character) => {
      console.log(character);
    });
  });
}
