import { getToken } from './users-service'
const BASE_URL = '/api/favorites';


export async function addFavorite(favInfo) {
    return sendRequest(BASE_URL, 'POST', favInfo)
}

export async function getFavoritesAPI() {
    return sendRequest(BASE_URL)
}

export async function deleteFavorite(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}



// HELPER FUNCTIONS:
async function sendRequest(url, method = 'GET', favInfo = null) {
    const options = { method }

    if (favInfo) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(favInfo);
    }
    

    const token = getToken()
    if (token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)
    console.log(res)




    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Bad Request')
    }
}



