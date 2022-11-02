init();

function init() {
    document.getElementById('load').addEventListener('click', async ()=>{
        const comments = await getComments();
        displayComments(comments);
    });
}

function displayComments(comments) {
    const list = document.getElementById('comments')
    list.replaceChildren(...comments.map(createCommentCard))
}

function createCommentCard(comment) {
    const element = document.createElement('article')
    element.innerHTML = `<header><h3>${comment.name}</h3></header>
    <main><p>${comment.content}</p></main>`;

    return element
}

async function getComments() {
    //http://localhost:3030/jsonstore/comments

    const responce = await fetch('http://localhost:3030/jsonstore/comments');
    const data = await responce.json();

    return Object.values(data)
}


async function postComment(comment) {
    const responce = await fetch('http://localhost:3030/jsonstore/comments',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    const data = await responce.json()

    return data
}