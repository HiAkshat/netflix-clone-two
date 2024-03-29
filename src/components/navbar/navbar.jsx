"use client"

import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import useScroll from './useScroll.js';
import styles from "./styles.module.css"
import HamMenu from "../hamMenu/hamMenu.jsx";
import Tab from "./tab/tab.jsx";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission and page reload
    const inputValue = event.target.elements.myInputName.value;
    router.push(`/search/${inputValue}`)
  };

  const isAtTop = useScroll();

  useEffect(()=>{
    console.log(isAtTop)
  }, [isAtTop])
  
  return (
    <div className={`fixed w-full left-0 z-[999] flex justify-center p-[20px] md:py-[20px] md:px-[40px] xl:px-[60px] transition-all duration-500 ease-in-out ${!isAtTop && styles.navbarScrolled}`}>
      <div className="flex justify-between w-full max-w-[1366px]">
        <div className="flex w-[10px] items-center gap-[20px] md:gap-[30px]">

          {isClient && 
            <Link className="hidden md:flex items-center" href="/">
              <div className="hidden md:inline-block md:relative md:w-[130px] h-full ">
                <img className="object-contain" src="/akflix.png" fill />
              </div>
            </Link>
          }

          <Link className="flex items-center" href="/">
            <div className="relative inline-block md:hidden h-max w-[45px]">
              <img className="object-contain" src="/a.png" fill />
            </div>
          </Link>

          <div className="hidden md:flex gap-[30px] items-center min-w-max">
            <Tab link={`/`} title={'Home'} />
            <Tab link={`/Popular`} title={'Popular'} />
            <Tab link={`/New`} title={'New'} />
            <Tab link={`/Top Rated`} title={'Top Rated'} />
          </div>
        </div>



        <div className="flex items-center gap-[30px]">
          <div className="flex gap-[10px] featuredImg items-center w-full md:max-w-[235px] h-[45px] pl-4 bg-[rgba(63,63,63,0.5)] rounded-full">
            <div><SearchIcon /></div>
            <form onSubmit={handleSubmit}>
              <input name="myInputName" type="text" placeholder="Search for a movie.." className="bg-transparent w-[90%] pr-4 outline-none text-white"/>
            </form>
          </div>

          <HamMenu />
        </div>
      </div>
    </div>
  )
}