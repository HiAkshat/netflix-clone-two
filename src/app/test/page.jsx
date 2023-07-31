import styles from "./styles.module.css"

import Navbar from "@/components/navbar/navbar"
import Image from "next/image"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
// import getMovieData, {getMovieCreditsData, getMovieRecData, getMovieSimilarData} from "@/api/getMovieData";
import Link from "next/link";

const bodyStyle = {
  // background: "url('/backdrop.jpg')"
}

export default function Page({params}){
  return (
    <div style={bodyStyle} className="flex flex-col gap-[50px] mb-[50px]">
      <Navbar />
      <img className="absolute top-0 left-0 object-cover w-full h-[95vh] z-[-1]" src="/backdrop.jpg" alt="" />
      <div className={`${styles.gradA}`}></div>
      <div className={`${styles.gradB}`}></div>

      <div className="flex items-center gap-[12px] text-[#DDD] cursor-pointer">
        <div><ArrowBackIosNewIcon fontSize="large"/></div>
        <div className="text-[20px]">Search Results</div>
      </div>

      <div className="flex gap-[65px]">
        <div className="w-[300px]">
          <img className="w-[300px]" src="/poster.jpg" alt="" />
        </div>

        <div className="flex flex-col max-w-[925px] gap-[53px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-end gap-[20px] flex-wrap">
              <span className="text-[64px] font-black leading-[50px]">Avengers: Endgame</span>
              <div className="flex items-end gap-[20px]">
                <span className="text-[24px] font-bold text-[#DDD] leading-[23px]">2019</span>
                <span className="text-[24px] text-[#DDD] leading-[23px]">Directed by <span className="font-bold">Anthony Russo</span></span>
              </div>
            </div>
            
            <div>
              <span className="italic text-[24px] text-[#DDD]">An entire universe. Once and for all.</span>
            </div>
          </div>

          <div>
            <p className="text-[24px] leading-[30px]">As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.

</p>
          </div>

          <div className="flex items-center gap-[12px] max-w-fit">
            <div><PlayArrowRoundedIcon fontSize="large"/></div>
            <span className="text-[24px]">Watch Trailer</span>
          </div>
        </div>
      </div>

    </div>
  )
}