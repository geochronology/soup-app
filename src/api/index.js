const KEY = '?client_id=5WEWUUGl88sb_t1rfA5XNqTAOi9LrbfYYjczTwvOetg'

const URL = `https://api.unsplash.com/search/photos`

const getSoups = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}&query=soup`)

  const data = response.json()

  if (response.status === 400) {
    throw new Error(data.errors)
  }

  console.log(data)
  return data
}

export { getSoups }