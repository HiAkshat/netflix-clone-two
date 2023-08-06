import Navbar from "@/components/navbar/navbar"
import { discoverMovie } from "@/api/getMovieData"
import MovieGrid from "@/components/movieGrid/movieGrid"

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return year + "-" + month + "-" + day;
}

function addMonths(date, n) {
  let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  newDate.setMonth(newDate.getMonth() + n);
  return newDate;
}

let today = new Date()
let todayStr = formatDate(today)
let before = formatDate(addMonths(today, -2))

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${decodeURIComponent(params.movieCat)} - AkG's Netflix`,
  }
}

export default async function Page({params}) {
  let data
  // sort_by=primary_release_date.desc
  if (params.movieCat === "Popular") data = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
  if (params.movieCat === "New") data = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&release_date.gte=${before}&release_date.lte=${todayStr}&api_key=${process.env.API_KEY}`)
  if (params.movieCat === "Top%20Rated") data = await discoverMovie(`https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=${process.env.API_KEY}`)
  // if (params.movieCat === "Top%20Rated") data = await discoverMovie(`https://api.themoviedb.org/3/discover/movie?include_video=false&page=1&sort_by=vote_average.desc&api_key=${process.env.API_KEY}`)

  return (
    <div className="flex flex-col gap-[30px] md:gap-[50px] mb-[50px]">
      <Navbar />
      <div className="mt-[100px] md:mt-[130px]">
        <MovieGrid heading={`${decodeURIComponent(params.movieCat)} Movies`} listData={data.results} />
      </div>
    </div>
  )
}