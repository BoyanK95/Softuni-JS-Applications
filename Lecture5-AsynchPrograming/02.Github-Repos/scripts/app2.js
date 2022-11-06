function loadRepos() {
  //read input field
  const username = document.getElementById("username").value;
  const ulElement = document.getElementById("repos");

  //send request
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(handleResponce)
    .then(displayRepos)
    .catch(handleError)

    function handleResponce(res) {
        if (res.ok == false) {
            throw new Error(`${res.status}  ${res.statusText}`)
        }

        return res.json()
    }

  //display response data
  function displayRepos(data) {
    ulElement.innerHTML = ``;

    for (let repo of data) {

        //SQL Injection Attack Posible, but faster!
      ulElement.innerHTML += `<li>
                                <a href="${repo.html_url}">
                                 ${repo.full_name}
                                </a>
                            </li>`;
    }
  }

 function handleError(err) {
    ulElement.innerHTML = `${err.message}`
 }
}
