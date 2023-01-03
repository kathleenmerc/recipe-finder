const BASE_URL = '/api/favorites';

export async function addFavorite(favInfo) {
    //console.log('this is working in favorites API before send request')
    //  console.log('props alone' + props)

    return sendRequest(BASE_URL, 'POST', favInfo)
    
}


// HELPER FUNCTIONS:
async function sendRequest (url, method = 'GET', favInfo = null) {
    const options = { method }
    
    if (favInfo) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(favInfo);
    }
    const res = await fetch(url, options)
    console.log(res)
    //console.log('OPTIONs.BDOY HERE = '  + options.body)

    if (res.ok) {
        return res.json 
    } else {
        console.log('the error is here in goals-api')
        throw new Error('Bad Request')
    }
    
 }



