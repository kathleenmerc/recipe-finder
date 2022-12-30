const BASE_URL = '/api/favorites';


export async function addFavorite(favorite) {
    //console.log('this is working in favorites API before send request')
    //console.log(formData)
    return sendRequest(BASE_URL, 'POST', favorite)
}


// HELPER FUNCTIONS:
async function sendRequest (url, method = 'GET', payload = null) {
    const options = { method }

    const res = await fetch(url, options)
    console.log(res)

    if (res.ok) {
        return res.json 
    } else {
        console.log('the error is here in goals-api')
        throw new Error('Bad Request')
    }
    
 }



