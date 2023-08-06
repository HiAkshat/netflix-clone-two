import Link from "next/link"

export default function MovieList({heading, listData}){
  return (
  <div className="flex flex-col gap-[20px]">
    <span className="font-bold text-[36px] md:text-[48px]">{heading}</span>
    <div className="noScrollbar flex p-6 gap-[50px] overflow-x-scroll">
      {listData.map(movie => (
        <Link key={movie.id} className="onHover" href={`/movie/${movie.id}`}>
          {movie.poster_path!=null ?
          <img className="max-w-[200px] md:max-w-[240px]" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} title={movie.title} /> :
          <img className="max-w-[200px] md:max-w-[240px]" src={`/no_poster.png`} alt={movie.title} title={movie.title} />
          }
        </Link>
      ))}
    </div>
  </div>
  )
}