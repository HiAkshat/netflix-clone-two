"use client"

import Navbar from "@/components/navbar/navbar"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import {getMovieSearchData} from "@/api/getMovieData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css"

export default function Page() {
  // const router = useRouter()
  const [data, setData] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission and page reload
    const inputValue = event.target.elements.myInputName.value;
    const searchdata = await getMovieSearchData(inputValue)
    setData(searchdata)
    // router.push("/movie/13")
    
  };

  return (
    <div className="flex flex-col gap-[30px] md:gap-[50px] pb-[50px]">
      <Navbar />
      <div className="flex items-center gap-[15px] md:gap-[25px] w-full h-[60px] md:h-[80px] bg-[#1B1A1A] rounded-2xl pl-[20px] md:pl-[45px]">
        <div className="text-[#D9D9D9]"><SearchIcon fontSize="large"/></div>
        <form onSubmit={handleSubmit}>
          <input name="myInputName" className="text-[20px] md:text-[24px] text-[#D9D9D9] outline-none bg-[rgba(0,0,0,0)]" type="text" placeholder="Search for a movie.."/>
        </form>
      </div>

      {data && 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] items-center">
          {data.results.map(movie => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              {movie.poster_path ?
              <img className={`${styles.onHover} w-[240px] m-auto`} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} title={movie.title} /> :
              <img className={`${styles.onHover} w-[240px] m-auto`} src={`/no_poster.webp`}  />
              }
            </Link>
          ))}
        </div>
      }
    </div>
  )
}