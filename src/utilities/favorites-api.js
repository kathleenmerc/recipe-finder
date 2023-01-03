const BASE_URL = '/api/favorites';

export async function addFavorite(favoriteData) {
    //console.log('this is working in favorites API before send request')
    //  console.log('props alone' + props)

    return sendRequest(BASE_URL, 'POST', favoriteData)
    
}


// HELPER FUNCTIONS:
async function sendRequest (url, method = 'GET', favoriteData) {
    const options = { method }
    
    if (favoriteData) {
        options.body = favoriteData
    }
     
    const res = await fetch(url, options)
    console.log(res)
    console.log('OPTIONs.BDOY HERE = '  + options.body)

    if (res.ok) {
        return res.json 
    } else {
        console.log('the error is here in goals-api')
        throw new Error('Bad Request')
    }
    
 }



