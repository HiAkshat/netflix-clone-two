"use client"

import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

export default function MovieGrid({heading, listData}) {
  return (
    <div className="flex flex-col gap-[20px]">
      <span className="font-bold text-[36px] md:text-[48px]">{heading}</span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 lg:gap-y-8">
        {listData.map(movie => (
          <motion.div whileHover={{
            scale: 1.1
          }} key={movie.id} className="w-min">
            <Link className="flex" href={`/movie/${movie.id}`}>
              <div className="relative onHover w-[150px] h-[225px] lg:w-[220px] lg:h-[330px] rounded-xl overflow-hidden">
                <Skeleton className="absolute object-cover opacity-20 bg-[#bfbfbf39]  w-[150px] h-[225px] lg:w-[220px] lg:h-[330px] rounded-xl z-[-1]" />
                {movie.poster_path ?
                <Image width={220} height={330} className="object-cover rounded-xl" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} title={movie.title}/>
                :
                <Image width={220} height={330} className="object-cover rounded-xl" src={`/no_poster.png`} alt={movie.title} title={movie.title}/>
                }
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}