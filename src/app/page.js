import Navbar from "@/components/navbar/navbar"
import MovieList from "@/components/movieList/movieList"
import { discoverMovie } from "@/api/getMovieData"
import getMovieData from "@/api/getMovieData"
import styles from "./styles.module.css"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link"

export default async function Home() {
  const query="avengers"
  const pageNum = "1"
  const popularMovies= await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const indianMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=hi|kn|ml|ta|te&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const animatedMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=16&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const docMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=99&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const comedyMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=35&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomMovie = popularMovies.results[0]
  const randomMovieData = await getMovieData(randomMovie.id)
  const randomMovieImgs = await discoverMovie(`https://api.themoviedb.org/3/movie/${randomMovie.id}/images?api_key=${process.env.API_KEY}`)
  // console.log(randomMovie)

  return (
    <main className="flex flex-col gap-[50px]">
      <Navbar />
      <img className="absolute top-0 left-0 object-cover w-full h-[95vh] z-[-1]" src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`} alt="" />
      <div className={`${styles.gradA}`}></div>
      <div className={`${styles.gradC}`}></div>

      <div className="absolute bottom-[200px] flex flex-col gap-[20px] w-[600px]">
        <div className="w-fit h-[150px]">
          <img className={`${styles.featuredImg} object-contain w-full h-full`} src={`https://image.tmdb.org/t/p/original/${randomMovieImgs.logos[0].file_path}`} />
        </div>
        <span className={`${styles.featuredText} text-lg`}>{randomMovieData.overview}</span>
        <div className="flex items-center">
          <Link href={`/movie/${randomMovie.id}/trailer`}>
            <div className="flex items-center bg-white px-6 py-3 m-2 ml-0 mr-6 rounded-lg text-[#080808] cursor-pointer">
              <PlayArrowIcon />
              <span className="text-xl font-medium pl-1">Play</span>
            </div>
          </Link>
          <Link href={`/movie/${randomMovie.id}`}>
            <div className="flex items-center bg-[rgba(8,8,8,0.4)] px-6 py-3 m-4 ml-0 rounded-lg text-white cursor-pointer">
              <InfoIcon />
              <span className="text-xl font-medium pl-1">Info</span>
            </div>
          </Link>
        </div>
      </div>


      <div className="flex flex-col gap-[50px] mt-[65vh]">
        <MovieList heading="Popular right now" listData={popularMovies.results} />
        <MovieList heading="Indian movies" listData={indianMovies.results} />
        <MovieList heading="Animated movies" listData={animatedMovies.results} />
        <MovieList heading="Documentaries" listData={docMovies.results} />
        <MovieList heading="Comedies" listData={comedyMovies.results} />
      </div>
    </main>
  )
}
