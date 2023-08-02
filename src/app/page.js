import Navbar from "@/components/navbar/navbar"
import MovieList from "@/components/movieList/movieList"
import { discoverMovie } from "@/api/getMovieData"

export default async function Home() {
  const query="avengers"
  const pageNum = "1"
  const popularMovies= await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  console.log(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageNum}&api_key=${process.env.API_KEY}`)
  return (
    <main className="flex flex-col gap-[50px]">
      <Navbar />
      <MovieList heading="Popular right now" listData={popularMovies.results} />
    </main>
  )
}
