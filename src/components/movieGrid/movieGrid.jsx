import Link from "next/link"

export default function MovieGrid({heading, listData}) {
  return (
    <div className="flex flex-col gap-[20px]">
      <span className="font-bold text-[36px] md:text-[48px]">{heading}</span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] items-center">
        {listData.map(movie => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            {movie.poster_path ?
            <img className="onHover w-[240px] m-auto" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} title={movie.title} /> :
            <img className="onHover w-[240px] m-auto" src={`/no_poster.webp`}  />
            }
          </Link>
        ))}
      </div>
    </div>
  )
}