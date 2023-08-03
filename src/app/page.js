import Navbar from "@/components/navbar/navbar"
import MovieList from "@/components/movieList/movieList"
import { discoverMovie } from "@/api/getMovieData"

export default async function Home() {
  const query="avengers"
  const pageNum = "1"
  const popularMovies= await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const indianMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=hi|kn|ml|ta|te&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const animatedMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=16&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const docMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=99&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const comedyMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=35&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  
  return (
    <main className="flex flex-col gap-[50px]">
      <Navbar />
      <MovieList heading="Popular right now" listData={popularMovies.results} />
      <MovieList heading="Indian movies" listData={indianMovies.results} />
      <MovieList heading="Animated movies" listData={animatedMovies.results} />
      <MovieList heading="Documentaries" listData={docMovies.results} />
      <MovieList heading="Comedies" listData={comedyMovies.results} />
    </main>
  )
}
