import styles from "./styles.module.css"

import Navbar from "@/components/navbar/navbar"
import Image from "next/image"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { getPersonData, discoverMovie } from "@/api/getMovieData";
import Link from "next/link";
import MovieList from "@/components/movieList/movieList";

const bodyStyle = {
  // background: "url('/backdrop.jpg')"
}

export default async function Page({params}){
  const data = await getPersonData(params.id)
  const movies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&with_cast=${params.id}`)

  return (
    <div style={bodyStyle} className="flex flex-col gap-[30px] md:gap-[50px] mb-[50px]">
      <Navbar />
      <img className="absolute top-0 left-0 object-cover w-full h-[95vh] z-[-1]" src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} alt="" />
      <div className={`${styles.gradA}`}></div>
      <div className={`${styles.gradB}`}></div>
      <div className={`${styles.gradC}`}></div>

      <div className="flex flex-2 flex-col lg:flex-row gap-[65px]">
        <div className="w-full lg:w-[300px]">
          {data.profile_path ?
          <img className="m-auto lg:m-0 w-[300px]" src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} alt={data.name} /> :
          <img className="m-auto lg:m-0 w-[300px]" src={`/no_poster.webp`} alt="" />
          }
        </div>

        <div className="flex flex-1 flex-col max-w-[925px] gap-[53px]">
          <div className="flex flex-col gap-[25px] lg:gap-[20px]">
            <div className="flex items-end gap-[20px] flex-wrap">
              <span className="text-[48px] lg:text-[64px] font-black leading-[50px]">{data.name}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[24px] leading-[30px] whitespace-pre-wrap">{data.biography}</p>

      {movies.results.length != 0 &&
        <MovieList heading={`Movies starring ${data.name}`} listData={movies.results.slice(0, 10)} />
      }

      {/* {similarData.results.length != 0 &&
        <MovieList heading="Similar" listData={similarData.results.slice(0, 10)} />
      } */}

    </div>
  )
}