function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles'
    const mainDiv = document.getElementById('main')
    mainDiv.innerHTML = ''
    getProfiles()
    

   async function getProfiles() {
        const responce = await fetch(baseUrl)
        let profileData = Object.values(await responce.json())
        
        profileData.forEach((user, i)=> {
            let userCar = document.createElement('div')
            userCar.className = 'profile'
            let idNumber = i + 1
            userCar.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
                              <label>Lock</label>
                              <input type="radio" name="user${idNumber}Locked" value="lock" checked>
                              <label>Unlock</label>
                              <input type="radio" name="user${idNumber}Locked" value="unlock"><br>
                              <hr>
                              <label>Username</label>
                              <input type="text" name="user${idNumber}Username" value="${user.username}" disabled readonly />
                              <div id="user1HiddenFields" style="display:none">
                                  <hr>
                                  <label>Email:</label>
                                  <input type="email" name="user${idNumber}Email" value="${user.email}" disabled readonly />
                                  <label>Age:</label>
                                  <input type="email" name="user${idNumber}Age" value="${user.age}" disabled readonly />
                              </div>
                              <button>Show more</button>`

        mainDiv.appendChild(userCar) 
        })
    }
}