import Image from "next/image"

export default function MoviePoster({data}) {
  return (
    <div>
      <div className="w-full lg:w-[300px]">
        <div className="relative w-[300px] h-[450px]">
        {data.poster_path ?
          <Image fill className="m-auto lg:m-0 w-[300px] object-cover" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} /> :
          <Image fill className="m-auto lg:m-0 w-[300px] object-cover" src={`/no_poster.webp`} />
        }
        </div>
      </div>
    </div>
)
}
