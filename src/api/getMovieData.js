export default async function getMovieData(movie_id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getMovieCreditsData(movie_id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getMovieRecData(movie_id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getMovieSimilarData(movie_id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getMovieVideoData(movie_id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getMovieSearchData(query) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=395a62dc9950940cae420e402cb02179&query=${query}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export {getMovieCreditsData, getMovieRecData, getMovieSimilarData, getMovieVideoData, getMovieSearchData}