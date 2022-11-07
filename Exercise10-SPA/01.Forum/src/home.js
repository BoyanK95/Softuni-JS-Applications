import { showDetails } from './details.js'

const section = document.getElementById('homeView')
// 
const main = document.getElementsByTagName('main')[0]
const form = main.querySelector('form')
form.addEventListener('submit', onSubmit)


export function showHome() {
    console.log('showHome');
    main.replaceChildren(section)
}

function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const { topicName, username, postText } = Object.fromEntries(formData)
    
    createPost({ topicName, username, postText })
}

async function createPost(body) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'

    const responce = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
    })

    const data = await responce.json()
    return data
}

showDetails()