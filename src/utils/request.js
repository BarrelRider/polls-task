export const getHeaders = (ctx) => {
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }
    return header;
}


export const withHost = (uri) => {
    return `https://polls.apiblueprint.org${uri}`
}