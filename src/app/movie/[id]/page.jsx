import styles from "./styles.module.css"

import Navbar from "@/components/navbar/navbar"
import Image from "next/image"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const bodyStyle = {
  // background: "url('/backdrop.jpg')"
}

export default function Page(){
  return (
    <div style={bodyStyle} className="flex flex-col gap-[50px]">
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
            <div className="flex items-end gap-[20px]">
              <span className="text-[64px] font-black leading-[50px]">Interstellar</span>
              <span className="text-[24px] font-bold text-[#DDD] leading-[23px]">2014</span>
              <span className="text-[24px] text-[#DDD] leading-[23px]">Directed by <span className="font-bold">Christopher Nolan</span></span>
            </div>
            
            <div>
              <span className="italic text-[24px] text-[#DDD]">Mankind was born on Earth. It was never meant to die here.</span>
            </div>
          </div>

          <div>
            <p className="text-[24px] leading-[30px]">The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.</p>
          </div>

          <div className="flex items-center gap-[12px] max-w-fit">
            <div><PlayArrowRoundedIcon fontSize="large"/></div>
            <span className="text-[24px]">Watch Trailer</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <span className="font-bold text-[48px]">Cast</span>
        <div className="flex gap-[50px]">
          <div className="flex flex-col gap-[15px] w-[155px]">
            <div className="w-[155px] h-[155px] rounded-full bg-[#D9D9D9] overflow-hidden"><img className="object-" src="/actor.jpg" alt="" /></div>
            <span className="text-center text-[16px]">Matthew McConaughey</span>
          </div>
          <div className="flex flex-col gap-[15px] w-[155px]">
            <div className="w-[155px] h-[155px] rounded-full bg-[#D9D9D9] overflow-hidden"><img className="object-" src="/actor.jpg" alt="" /></div>
            <span className="text-center text-[16px]">Matthew McConaughey</span>
          </div>
          <div className="flex flex-col gap-[15px] w-[155px]">
            <div className="w-[155px] h-[155px] rounded-full bg-[#D9D9D9] overflow-hidden"><img className="object-" src="/actor.jpg" alt="" /></div>
            <span className="text-center text-[16px]">Matthew McConaughey</span>
          </div>
          <div className="flex flex-col gap-[15px] w-[155px]">
            <div className="w-[155px] h-[155px] rounded-full bg-[#D9D9D9] overflow-hidden"><img className="object-" src="/actor.jpg" alt="" /></div>
            <span className="text-center text-[16px]">Matthew McConaughey</span>
          </div>
          <div className="flex flex-col gap-[15px] w-[155px]">
            <div className="w-[155px] h-[155px] rounded-full bg-[#D9D9D9] overflow-hidden"><img className="object-" src="/actor.jpg" alt="" /></div>
            <span className="text-center text-[16px]">Matthew McConaughey</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <span className="font-bold text-[48px]">If you like Interstellar</span>
        <div className="flex gap-[50px]">
          <img className="w-[240px]" src="/poster.jpg" alt="" />
          <img className="w-[240px]" src="/poster.jpg" alt="" />
          <img className="w-[240px]" src="/poster.jpg" alt="" />
          <img className="w-[240px]" src="/poster.jpg" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <span className="font-bold text-[48px]">Similar</span>
        <div className="flex gap-[50px]">
          <img className="w-[240px]" src="/poster.jpg" alt="" />
          <img className="w-[240px]" src="/poster.jpg" alt="" />
          <img className="w-[240px]" src="/poster.jpg" alt="" />
          <img className="w-[240px]" src="/poster.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}