import Navbar from "@/components/navbar/navbar"
import { getPersonData, discoverMovie } from "@/api/getMovieData";
import MovieGrid from "@/components/movieGrid/movieGrid";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getPersonData(params.id)

  return {
    title: `${data.name} - AkG's Netflix`,
  }
}

export default async function Page({params}){
  const data = await getPersonData(params.id)
  const movies = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&with_cast=${params.id}`)

  return (
    <div className="flex flex-col gap-[30px] md:gap-[50px] mb-[50px]">
      <Navbar />

      <div className="flex flex-2 flex-col lg:flex-row gap-[65px] mt-[100px] md:mt-[150px]">
        <div className="w-full lg:w-[300px]">
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden m-auto">
              <div>
                {data.profile_path ?
                  <Image fill className="object-cover object-center" src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} alt={data.name}/>
                  :
                  <Image fill className="object-cover object-center" src={`/no_photo.png`} alt="" />
                }
              </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col max-w-[925px] gap-[53px]">
          <div className="flex flex-col gap-[25px] lg:gap-[20px]">
            <div className="flex flex-col gap-[20px] flex-wrap">
              <span className="text-[48px] lg:text-[64px] font-black leading-[50px]">{data.name}</span>
              {data.birthday && <span className="italic text-[24px] text-[#DDD]">DOB: {data.birthday}</span>}
            </div>
          </div>
        </div>
      </div>

      <p className="text-[20px] lg:text-[24px] leading-[30px] whitespace-pre-wrap">{data.biography}</p>

      {movies.results.length != 0 &&
        <MovieGrid heading={`Movies starring ${data.name}`} listData={movies.results} />
      }
    </div>
  )
}