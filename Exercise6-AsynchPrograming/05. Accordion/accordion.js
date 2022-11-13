function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const mainRoot = document.getElementById('main')
    createArticle(getUrl())

    function createArticle(data) {
        const divAccordion = document.createElement('div')
        divAccordion.classList.add('accordion')
        data.forEach(article => {
            let headDiv = document.createElement('div')
            headDiv.className = 'head'
            let spanEl = document.createElement('span')
            spanEl.textContent = article.title
            let btn = document.createElement('button')
            btn.setAttribute('id', article._id)
            btn.setAttribute('class', 'button')
            btn.textContent = 'More'
            headDiv.appendChild(spanEl)
            headDiv.appendChild(btn)
            let extraDiv = document.createElement('div')
            let extraP = document.createElement('p')
            extraP.textContent = getUrl()

        });
        
    //         <span>Scalable Vector Graphics</span>
    //         <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
    //     </div>
    //     <div class="extra">
    //         <p>Scalable Vector Graphics .....</p>

    }

    async function getUrl(id = null ? null : id) {
        try{
            if (!responce.ok) {
                const err = await responce.json()
                throw new Error(err.message)
            }
            if (id) {
            const responce = await fetch(baseUrl + '/' +id)
            const data = responce.json()
            return data
            }else {
                const responce = await fetch(baseUrl)
                const data = responce.json()
                return data
            }


        }catch(err){
            window.alert(err.message)
        }
    }
}