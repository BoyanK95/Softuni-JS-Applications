const host = 'http://localhost:3030/'

async function requester(method, url, data) {
    const option = {
        method,
        headers:{},
    }
    if (data) {
        option.headers['Content-Type'] = "Applications/json"
        option.body = JSON.stringify(data)
    }

    const responce = await fetch(host + url, option)
    const data = await responce.json()

    return data
}

const get = requester.bind(null, 'get')
const post = requester.bind(null, 'post')
const put = requester.bind(null, 'put')
const del = requester.bind(null, 'delete')

export {
    get,
    post,
    put,
    del as delete
}