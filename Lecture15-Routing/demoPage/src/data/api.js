const host = 'http://localhost:3030'


async function requester(method, url, data) {
    const option = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        option.headers['Content-type'] = 'application.json'
        option.body = JSON.stringify(data)
    }
    try{
        const responce = await fetch(host + url, option)
        if (responce.status == 204) {
            return responce
        }

        const data = await responce.json()

        if (responce.ok == false) {
            throw new Error(data.message)
        }

        return data

    }catch(err){
        alert(err.message)
        throw err
    }
}

export const get = requester.bind(null, 'get')
export const post = requester.bind(null, 'post')
export const put = requester.bind(null, 'put')
export const del = requester.bind(null, 'delete') 