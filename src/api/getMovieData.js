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

async function getMovieSearchData(query, pageNum) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageNum}&api_key=395a62dc9950940cae420e402cb02179`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function discoverMovie(query){
  const res = await fetch(query)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getPersonData(person_id) {
  const res = await fetch(`https://api.themoviedb.org/3/person/${person_id}?language=en-US&api_key=${process.env.API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getFeaturedMovie() {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // const currentDate = new Date();
  // const currentHour = currentDate.getHours();
  const popularMovies= await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const randomMovie = popularMovies.results[getRandomNumber(1, 10)]
  const randomMovieData = await getMovieData(randomMovie.id)
  const randomMovieImgs = await discoverMovie(`https://api.themoviedb.org/3/movie/${randomMovie.id}/images?api_key=${process.env.API_KEY}`)

  function sliceTextAtFirstFullStop(text) {
    const firstFullStopIndex = text.indexOf('. ');
    if (firstFullStopIndex !== -1) {
      return text.slice(0, firstFullStopIndex + 1); // Include the full stop in the result
    } else {
      return text; // If no full stop is found, return the original text
    }
  }
  
  return {
    id: randomMovie.id,
    logo: randomMovieImgs.logos[0].file_path,
    backdrop: randomMovie.backdrop_path,
    overview: sliceTextAtFirstFullStop(randomMovieData.overview)
  }
}

export {getMovieCreditsData, getMovieRecData, getMovieSimilarData, getMovieVideoData, getMovieSearchData, discoverMovie, getPersonData, getFeaturedMovie}