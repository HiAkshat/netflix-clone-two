  import styles from "./styles.module.css"

  import Navbar from "@/components/navbar/navbar"
  import Image from "next/image"
  import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
  import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
  import getMovieData, {getMovieCreditsData, getMovieRecData, getMovieSimilarData, getMovieVideoData} from "@/api/getMovieData";
  import Link from "next/link";
  import MovieList from "@/components/movieList/movieList";

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
        <img className="absolute top-0 left-0 object-cover w-full h-[95vh] z-[-1]" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
        <div className={`${styles.gradA}`}></div>
        <div className={`${styles.gradB}`}></div>
        <div className={`${styles.gradC}`}></div>

        {/* <div className="flex items-center gap-[12px] text-[#DDD] cursor-pointer">
          <div><ArrowBackIosNewIcon fontSize="large"/></div>
          <div className="text-[20px]">Search Results</div>
        </div> */}

        <div className="flex flex-2 flex-col lg:flex-row gap-[65px]">
          <div className="w-full lg:w-[300px]">
            {data.poster_path ?
            <img className="m-auto lg:m-0 w-[300px]" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} /> :
            <img className="m-auto lg:m-0 w-[300px]" src={`/no_poster.webp`} alt="" />
            }
          </div>

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
              <Link 
                href={{
                  pathname: `/movie/${params.id}/trailer`,
                  query: {
                    backdrop: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
                    videoId: vidData.results.find(video => video.type==="Trailer").key
                  }
                }}
              >
                <div className="flex items-center gap-[12px] max-w-fit rounded-2xl bg-[rgba(63,63,63,0.5)] p-3 pr-6">
                  <div><PlayArrowRoundedIcon fontSize="large"/></div>
                  <span className="text-[24px]">Watch Trailer</span>
                </div>
              </Link>
            }
          </div>


        </div>

        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <span className="font-bold text-[36px] md:text-[48px]">Cast</span>
          <div className={`${styles.noScrollbar} flex overflow-x-scroll`}>
            {creditsData.cast.map(actor => (
              <Link key={actor.id} className="" href={`/cast/${actor.id}`}>
                <div key={actor.id} className="flex flex-col items-center gap-[15px] rounded-2xl hover:bg-[rgba(63,63,63,0.5)] p-8">
                  <div className={`${styles.Hover} w-[100px] h-[100px] md:w-[155px] md:h-[155px] rounded-full bg-[#D9D9D9] overflow-hidden`}><img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={actor.name} /></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-center text-[14px] md:text-[16px]">{actor.name}</span>
                    <span className="text-center text-[12px] md:text-[14px] text-[#DDD]">{actor.character}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {recData.results.length != 0 &&
          <MovieList heading={`If you like ${data.title}`} listData={recData.results.slice(0, 10)} />
        }

        {similarData.results.length != 0 &&
          <MovieList heading="Similar" listData={similarData.results.slice(0, 10)} />
        }
      </div>
    )
  }