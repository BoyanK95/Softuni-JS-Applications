const host = 'http://localhost:3030/'

async function requester(method, url, data) {
    const user = JSON.parse(sessionStorage.getItem('user'))
    const option = {
        method,
        headers:{},
    }


    if (data) {
        option.headers['Content-Type'] = "Applications/json"
        option.body = JSON.stringify(data)
    }

    if (user) {
        const token = user.accessToken
        option.headers['X-Authorization'] = token
    }

    try{
        const responce = await fetch(host + url, option)
        if (!responce.ok) {
            if (responce.status === 403) {
                sessionStorage.removeItem('user')
            }
            const err = await responce.json()
            throw new Error(err.message)
        }

        if (responce.status === 204) {
            return responce
        } else {
            return responce.json()
        }
    } catch(error){
        alert(error.message)
        throw error
    }

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