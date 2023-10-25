export const fetchApi = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    const response = await data.json()
    return response
}