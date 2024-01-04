export const fetchNews = async (uri, apiKey) => {
  try {
    const response = await fetch(`${uri}${apiKey}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
