import Image from "next/image"
import Link from "next/link"

export default function MovieGrid({heading, listData}) {
  return (
    <div className="flex flex-col gap-[20px]">
      <span className="font-bold text-[36px] md:text-[48px]">{heading}</span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 lg:gap-y-8">
        {listData.map(movie => (
          <Link className="flex justify-center" key={movie.id} href={`/movie/${movie.id}`}>
            {movie.poster_path ?
              <div className="relative onHover w-[150px] h-[225px] lg:w-[220px] lg:h-[330px]">
                <Image fill className="object-cover" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} title={movie.title}/>
              </div> :
              <div className="relative onHover w-[220px] h-[330px]">
                <Image fill className="object-cover" src={`/no_poster.png`} alt={movie.title} title={movie.title}/>
              </div>
            }
          </Link>
        ))}
      </div>
    </div>
  )
}