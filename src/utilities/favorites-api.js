const BASE_URL = '/api/favorites';

export async function addFavorite(favInfo) {
    //console.log('this is working in favorites API before send request')
    //  console.log('props alone' + props)

    return sendRequest(BASE_URL, 'POST', favInfo)
    
}

export async function getFavoritesAPI() {
    return sendRequest(BASE_URL)
}

export async function deleteFavorite(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}



// HELPER FUNCTIONS:
async function sendRequest (url, method = 'GET', favInfo = null) {
    const options = { method }
    
    if (favInfo) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(favInfo);
    }
    const res = await fetch(url, options)
    console.log('RESPONSE IN favorites-api')
    console.log(res)

    if (res.ok) {
        return res.json()
    } else {
        console.log('the error is here in favorites-api')
        throw new Error('Bad Request')
    }
    
 }



