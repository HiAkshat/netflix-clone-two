import Image from "next/image"
import Link from "next/link"

export default function MovieList({heading, listData}){
  return (
  <div className="flex flex-col gap-[20px]">
    <span className="font-bold text-[36px] md:text-[48px]">{heading}</span>
    <div className="noScrollbar flex p-6 gap-5 lg:gap-[50px] overflow-x-scroll">
      {listData.map(movie => (
        <Link key={movie.id} className="onHover" href={`/movie/${movie.id}`}>
          {movie.poster_path!=null ?
            <div className="relative w-[150px] h-[225px] lg:w-[220px] lg:h-[330px]">
              <Image fill className="object-cover" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} title={movie.title}/>
            </div> :
            <div className="relative w-[150px] h-[225px] lg:w-[220px] lg:h-[330px]">
              <Image fill className="object-cover" src={`/no_poster.png`} alt={movie.title} title={movie.title}/>
            </div>
          }
        </Link>
      ))}
    </div>
  </div>
  )
}