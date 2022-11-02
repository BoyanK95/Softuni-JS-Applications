const list = document.getElementById('comments')
const nameInput = document.querySelector('[name="name"]');
const contentInput = document.querySelector('[name="content"]');

init();

function init() {
    document.getElementById('load').addEventListener('click',  getComments);
    document.getElementById('send').addEventListener('click', onPost);

    getComments();
}
async function onPost() {
    const name = nameInput.value;
    const content =contentInput.value;

    nameInput.value = '';
    contentInput.value = '';

    const result = await postComment({ name, content });
    list.prepend(createCommentCard(result))
}

function displayComments(comments) {
    list.replaceChildren(...comments.map(createCommentCard));
}

function createCommentCard(comment) {
    const element = document.createElement('article');
    element.innerHTML = `<header><h3>${comment.name}</h3></header>
    <main><p>${comment.content}</p></main>`;

    return element
}

async function getComments() {
    //http://localhost:3030/jsonstore/comments

    const responce = await fetch('http://localhost:3030/jsonstore/comments');
    const data = await responce.json();

    const comments = Object.values(data).reverse();
    displayComments(comments);
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