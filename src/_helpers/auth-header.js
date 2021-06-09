
export function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token');
    console.log(token)
    if (token) {
        return { 'Authorization': 'Bearer ' + token ,'Access-Control-Allow-Origin':'*'};
    } else {
        return {};
    }
}