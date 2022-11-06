async function loadCommits() {
  //read input field
  const username = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;
  const list = document.getElementById('commits')

  try {
    //send request
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );
    //chekc for errors
    if (res.ok == false) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    const items = data.map( repo => {
        const liEl = document.createElement('li')
        liEl.textContent = `${repo.commit.author.name}: ${repo.commit.message}`
        
        return liEl
    })

    list.replaceChildren(...items)
    
    // list.innerHTML = ''
    // for (let {commit} of data) {
    //     list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`
    // }
    //display results
  } catch (err) {
    list.innerHTML = `Error; ${err.message}!`
  }
}
