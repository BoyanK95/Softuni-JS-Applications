document
  .getElementById("load-charachter")
  .addEventListener("click", asyncLoadCharachter);

  const displayArea = document.getElementById('charachters-area')

  async function asyncLoadCharachter() {
    const res = await fetch(`https://swapi.dev/api/people/` + document.getElementById('idNum').value)
    const data = await res.json()
    console.log(data);
    let personName = JSON.stringify(data.name);
    let personHeight = JSON.stringify(data.height);

    displayArea.value = `This ${personName} is ${personHeight}m tall and has ${data.skin_color} skin and is of ${data.gender} gender!`
  }

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
