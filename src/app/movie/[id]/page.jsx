import styles from "./styles.module.css"

import Navbar from "@/components/navbar/navbar"
import Image from "next/image"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import getMovieData, {getMovieCreditsData, getMovieRecData, getMovieSimilarData, getMovieVideoData} from "@/api/getMovieData";
import Link from "next/link";
import MovieList from "@/components/movieList/movieList";
import TrailerButton from "@/components/trailerButton/trailerButton";
import MoviePoster from "@/components/moviePoster/moviePoster";
import MovieCast from "@/components/movieCast/movieCast";

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getMovieData(params.id)

  return {
    title: `${data.title} - AkG's Netflix`,
  }
}

export default async function Page({params}){
  const data = await getMovieData(params.id)
  const creditsData = await getMovieCreditsData(params.id)
  const recData = await getMovieRecData(params.id)
  const similarData = await getMovieSimilarData(params.id)

  const vidData = await getMovieVideoData(params.id)
  const videoAvailable = vidData.results.find(video => video.type==="Trailer")

  const directors = creditsData.crew.filter(person => person.job==="Director").map(person => person.name).join(", ")

  return (
    <div className="flex flex-col gap-[30px] md:gap-[50px] mb-[50px]">
      <Navbar />

      {data.backdrop_path &&
        <div className="absolute top-0 left-0 object-cover w-full h-[95vh] z-[-1]">
          <Image fill className="object-cover" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
        </div>
      }
      <div className={`${styles.gradA}`}></div>
      <div className={`${styles.gradB}`}></div>
      <div className={`${styles.gradC}`}></div>

      <div className="flex flex-2 flex-col lg:flex-row gap-[65px] mt-[100px] md:mt-[150px]">
        <MoviePoster data={data} />

        <div className="flex flex-1 flex-col max-w-[925px] gap-[53px]">
          <div className="flex flex-col gap-[25px] lg:gap-[20px]">
            <div className="flex flex-col md:flex-row md:items-end gap-[20px] flex-wrap">
              <span className="text-[48px] lg:text-[64px] font-black leading-[50px]">{data.title}</span>
              <div className="flex flex-col md:flex-row lg:items-end gap-[10px] lg:gap-[20px]">
                <span className="text-[24px] font-bold text-[#DDD] leading-[23px]">{data.release_date.split("-")[0]}</span>
                {directors!="" && <span className="text-[24px] text-[#DDD] leading-[23px]">Directed by <span className="font-bold">{directors}</span></span>}
              </div>
            </div>
            
            <div>
              <span className="italic text-[24px] text-[#DDD]">{data.tagline}</span>
            </div>
          </div>

          <div>
            <p className="text-[20px] lg:text-[24px] leading-[30px]">{data.overview}</p>
          </div>

          {videoAvailable &&
            <TrailerButton movie_id={params.id} backdrop_path={data.backdrop_path} vidData={vidData}/>
          }
        </div>


      </div>

      <MovieCast creditsData={creditsData} />

      {recData.results.length != 0 &&
        <MovieList heading={`If you like ${data.title}`} listData={recData.results.slice(0, 10)} />
      }

      {similarData.results.length != 0 &&
        <MovieList heading="Similar" listData={similarData.results.slice(0, 10)} />
      }
    </div>
  )
}