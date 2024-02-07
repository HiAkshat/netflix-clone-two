"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useState } from "react";

export default function TrailerButton({movie_id, backdrop_path, vidData}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div whileHover={{
      
    }}>
      <Link 
        href={{
          pathname: `/movie/${movie_id}/trailer`,
          query: {
            backdrop: `https://image.tmdb.org/t/p/original/${backdrop_path}`,
            videoId: vidData.results.find(video => video.type==="Trailer").key
          }
        }}
      >
        <div className="flex relative items-center gap-[12px] max-w-fit rounded-2xl p-3 pr-6 bg-[#]">
          <motion.div initial={{
            scale: 0,
          }}

          animate={{
            scale: isHovered ? 1 : 0
          }}

          className="absolute left-0 z-[-1] w-[100%] h-[100%] bg-white rounded-full"></motion.div>
          <motion.div
            animate={{
              color: isHovered ? "black" : "white"
            }}
          className="text-white" ><PlayArrowRoundedIcon fontSize="large"/></motion.div>
          <motion.span whileHover={{color: "black"}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className="text-[24px]">Watch Trailer</motion.span>
        </div>
      </Link>
    </motion.div>
  )
}
