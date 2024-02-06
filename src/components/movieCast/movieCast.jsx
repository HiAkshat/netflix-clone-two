"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

export default function MovieCast({creditsData}) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-[36px] md:text-[48px]">Cast</span>
      <div className={`relative right-6 noScrollbar flex overflow-x-scroll`}>
        {creditsData.cast.map(actor => (
          <motion.div whileHover={{
            backgroundColor: "#2F2F2F"
          }}
          transition={{
            duration: 0.2
          }}
          className="rounded-2xl">
            <Link key={actor.id} className="" href={`/cast/${actor.id}`}>
              <div key={actor.id} className="flex flex-col h-full items-center gap-[15px] rounded-2xl p-6">
                <div className={`relative w-[100px] h-[100px] md:w-[155px] md:h-[155px] rounded-full  overflow-hidden`}>
                  <Skeleton className="absolute opacity-20 w-[100px] h-[100px] md:w-[155px] md:h-[155px] rounded-full" />
                  {actor.profile_path ?
                    <Image fill className="object-cover object-center" src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={actor.name} /> :
                    <Image fill src={`/no_photo.png`} alt="" />
                  }
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-center text-[14px] md:text-[16px]">{actor.name}</span>
                  <span className="text-center text-[12px] md:text-[14px] text-[#DDD]">{actor.character}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
