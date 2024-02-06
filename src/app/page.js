import Navbar from "@/components/navbar/navbar"
import MovieList from "@/components/movieList/movieList"
import { discoverMovie, getFeaturedMovie } from "@/api/getMovieData"
import {getMovieVideoData} from "@/api/getMovieData"
import styles from "./styles.module.css"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link"
import Image from "next/image"

export default async function Home() {
  const popularMovies= await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const indianMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=hi|kn|ml|ta|te&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const animatedMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=16&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const docMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=99&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const comedyMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=35&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const horrorMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=27&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const scifiMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=878&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const familyMovies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=10751&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  const featuredMovie = await getFeaturedMovie()
  const vidData = await getMovieVideoData(featuredMovie.id)
  const videoID = vidData.results.find(video => video.type==="Trailer").key

  return (
    <main className="flex flex-col gap-[30px] md:gap-[50px] mb-[50px]">
      <Navbar />
      <div className="absolute top-20 lg:top-0 left-0 object-cover w-full h-[95vh] z-[-1] overflow-hidden">
        {videoID ?
          <div>
            <iframe className="hidden md:block w-full h-[40vh] lg:h-[95vh] scale-[2] lg:scale-150 z-[-2]" src={`https://www.youtube.com/embed/${videoID}?&autoplay=1&mute=1&loop=1&si=hnw56FhXsYGRDLgI&amp;controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Image fill className="md:hidden object-cover object-top" src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop}`} alt="" />
          </div>
          :
          <Image fill className="object-cover object-top" src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop}`} alt="" />
        }
      </div>
      <div className={`${styles.gradA}`}></div>
      <div className={`${styles.gradC}`}></div>

      <div className="flex flex-col mt-[150px] gap-[20px] w-[80%] lg:w-[600px]">
        <div className="w-fit h-[150px]">
          <img className={`${styles.featuredImg} object-contain w-full h-full`} src={`https://image.tmdb.org/t/p/original/${featuredMovie.logo}`} />
        </div>
        <span className={`${styles.featuredText} text-lg`}>{featuredMovie.overview}</span>
        <div className="flex items-center">
          <Link href={`/movie/${featuredMovie.id}/trailer`}>
            <div className="flex items-center bg-white hover:bg-[#e6e6e6] px-6 py-3 m-2 ml-0 mr-6 rounded-lg text-[#080808] cursor-pointer">
              <PlayArrowIcon />
              <span className="text-xl font-medium pl-1">Play</span>
            </div>
          </Link>
          <Link href={`/movie/${featuredMovie.id}`}>
            <div className="flex items-center bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.35)] px-6 py-3 m-4 ml-0 rounded-lg text-white cursor-pointer">
              <InfoIcon />
              <span className="text-xl font-medium pl-1">Info</span>
            </div>
          </Link>
        </div>
      </div>


      <div className="flex flex-col gap-7">
        <MovieList heading="Popular right now" listData={popularMovies.results} />
        <MovieList heading="Indian movies" listData={indianMovies.results} />
        <MovieList heading="Animated movies" listData={animatedMovies.results} />
        <MovieList heading="Documentaries" listData={docMovies.results} />
        <MovieList heading="Comedies" listData={comedyMovies.results} />
        <MovieList heading="Horror films" listData={horrorMovies.results} />
        <MovieList heading="Sci-fi movies" listData={scifiMovies.results} />
        <MovieList heading="Watch with your Family" listData={familyMovies.results} />
      </div>
    </main>
  )
}
