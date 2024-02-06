"use client"

import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

export default function MovieList({heading, listData}){
  return (
  <motion.div initial={{opacity: 0}} whileInView={{
    opacity: 1
  }}
  viewport={{once: true}}
  transition={{duration: 0.8}}
  className="flex flex-col">
    <span className="font-bold text-[36px] md:text-[48px]">{heading}</span>
    <div className="relative noScrollbar flex p-6 right-6 gap-5 lg:gap-6 overflow-x-scroll">
      {listData.map(movie => (
        <motion.div key={movie.id} whileHover={{
          scale: 1.1,
        }}
        >
          <Link href={`/movie/${movie.id}`}>
            {movie.poster_path!=null ?
              <div className="relative w-[150px] h-[225px] lg:w-[220px] lg:h-[330px] rounded-xl">
                <Skeleton className="absolute opacity-20 w-[150px] h-[225px] lg:w-[220px] lg:h-[330px] rounded-xl object-cover" />
                <Image fill className="object-cover rounded-xl" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} title={movie.title}/>
              </div> :
              <div className="relative w-[150px] h-[225px] lg:w-[220px] lg:h-[330px] rounded-xl">
                <Image fill className="object-cover rounded-xl" src={`/no_poster.png`} alt={movie.title} title={movie.title}/>
              </div>
            }
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.div>
  )
}