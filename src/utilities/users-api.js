import { getToken } from './users-service'

// BASE PATH FOR THE EXPRESS ROUTE:
const BASE_URL = '/api/users'


// USER FUNCTIONS:
export function signUpAPI(userData) {
    return sendRequest(`${BASE_URL}`, 'POST', userData)
}

export function logInAPI(userData) {
    return sendRequest(`${BASE_URL}/login`, 'POST', userData)
}

export function checkTokenAPI(userData) {
    return sendRequest(`${BASE_URL}/check-token`)
}



// HELPER FUNCTIONS:
export default async function sendRequest(url, method = 'GET', payload = null) {

    // If the request has payload, then add headers and body in the response:
    const options = { method }
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }

    // Check to see if there is a valid token: 
    // If there is a token, then add the token to the request Authorization header:
    const token = getToken()
    if (token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }

    // First fetch, then if the response is good, then return res.json:
    const res = await fetch(url, options)
    if (res.ok) return res.json()
    throw new Error('Bad Request')
}



// REFACTORED CODE - SEE ABOVE:
// export async function signUpAPI(userData) {
//     const res = await fetch(`${BASE_URL}/signup`, {
//         method: 'POST',
//         headers: {'Content-Type' : 'application/json'},
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         // res.json will resolve to the JWT
//         return res.json()
//     } else {
//         throw new Error('Invalid Sign Up')
//     }

// }

// export async function logInAPI(userData) {
//     const res = await fetch (`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: {'Content-Type' : 'application/json'},
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error('Invalid Log In')
//     }
// }