const section = document.getElementById('detailsView')
const main = document.getElementsByTagName('main')[0]

section.remove()

export async function showDetails(e) {
    if (!e) {
        return
    }
    let id;
    if (e.target.tagName == 'H2') {
        id = e.target.parentElement.id
    } else if (e.target.tagName == 'A'){
        id = e.target.id
    }
    const topic = loadTopic(id)
    //const comments = loadComment(id)
    //const res = topicTemplate(topic, comments) //tbd
    //section.replaceChildren(res)

    main.replaceChildren(section)
}

function topicTemplate(data) {
    
}

async function loadTopic(id) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`

    const responce = await fetch(url)
    const data = await responce.json()

    return data
}
