"use client"

import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission and page reload
    const inputValue = event.target.elements.myInputName.value;
    router.push(`/search/${inputValue}`)
  };

  return (
    <div className="flex justify-between  ">
      <div className="flex gap-[20px] md:gap-[50px] items-center">
        <Link href="/">
          <div className="relative w-[100px] md:w-[169px] h-[45px]">
            <Image className="object-contain" src="/logo.png" fill />
          </div>
        </Link>

        <div className="hidden md:flex gap-[30px]">
          <Link href={`/`}><span className="textShadow">Home</span></Link>
          <Link href={`/Popular`}><span className="textShadow">Popular</span></Link>
          <Link href={`/New`}><span className="textShadow">New</span></Link>
          <Link href={`/Top Rated`}><span className="textShadow">Top Rated</span></Link>
        </div>
      </div>

      <div className="flex gap-[10px] featuredImg items-center md:max-w-[235px] h-[45px] pl-4 bg-[rgba(63,63,63,0.5)] rounded-full">
        <div><SearchIcon /></div>
        <form onSubmit={handleSubmit}>
          <input name="myInputName" type="text" placeholder="Search for a movie.." className="bg-transparent w-[90%] pr-4 outline-none text-white"/>
        </form>
      </div>
    </div>
  )
}