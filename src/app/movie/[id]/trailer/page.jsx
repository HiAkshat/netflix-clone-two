import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import getMovieData, {getMovieVideoData} from '@/api/getMovieData';
import Link from 'next/link';

export default async function Page({params, searchParams}) {
  let backdrop_path, videoID

  if (searchParams.videoId && searchParams.backdrop_path){
    videoID = searchParams.videoID
    backdrop_path = searchParams.backdrop_path
  }

  else {
    const vidData = await getMovieVideoData(params.id)
    const movieData = await getMovieData(params.id)

    backdrop_path = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
    videoID = vidData.results.find(video => video.type==="Trailer").key
  }

  return (
    <div className='flex flex-col gap-[20px] items-center justify-center absolute top-0 left-0 w-full min-h-screen'>
      <img className="absolute top-0 left-0 object-cover w-full h-[100vh] z-[-1]" src={backdrop_path} alt="" />
      <div className='absolute z-[-1] top-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,0.5)]'></div>
      <div className="flex items-center justify-start w-[90%] h-[40px]">
        <Link href={`/movie/${params.id}`}>
          <div className="cursor-pointer"><ArrowBackIosNewIcon fontSize="large"/></div>
        </Link>
      </div>
      <iframe className="w-[90%] h-[80vh]" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>

  )
}