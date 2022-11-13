function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles'
    const mainDiv = document.getElementById('main')
    mainDiv.innerHTML = ''
    
    getProfiles()


    function showProfile(e) {
        console.log(e);
        debugger
    }

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
                              `
        
        let showMoreBtn = document.createElement('button')
        showMoreBtn.textContent = 'Show more'
        userCar.appendChild(showMoreBtn)
        mainDiv.appendChild(userCar)
        
        showMoreBtn.addEventListener('click', showInfo)
        })
    }
    
    function showInfo(e) {
        let isLcoked = e.target.parentElement.querySelectorAll('input')[0].checked
        let isUnlocked = e.target.parentElement.querySelectorAll('input')[1].checked
        let btn = e.target
        if (isLcoked) {
            return
        }
        let hiddenDiv = e.target.parentElement.querySelector('#user1HiddenFields')
        if (hiddenDiv.style.display == 'none') {
            hiddenDiv.style.display = 'block'
            btn.textContent = 'Hide it'
        }else if(hiddenDiv.style.display == 'block' && isUnlocked){
            hiddenDiv.style.display = 'none'
            btn.textContent = 'Show more'
            debugger
        }
    }
}