"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export default function TrailerButton({movie_id, backdrop_path, vidData}) {
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
        <motion.div whileHover={{
          backgroundColor: "#FFFFFF",
          color: "#00000",
          scale: 1.1
        }}
        
        transition={{
          type: "spring"
        }}

        className="flex items-center gap-[12px] max-w-fit rounded-2xl p-3 pr-6">
          <div><PlayArrowRoundedIcon fontSize="large"/></div>
          <span className="text-[24px]">Watch Trailer</span>
        </motion.div>
      </Link>
    </motion.div>
  )
}
