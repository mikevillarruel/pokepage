export default async function apiCall({
    url,
    method = "get",
    body,
    headers,
}) {
    try {

        const response = await fetch(url, {
            method,
            body,
            headers,
            timeout:3000 //1 seg,
        })

        return response.json();
        
    } catch (error) {
        Promise.reject(error)
    }
}