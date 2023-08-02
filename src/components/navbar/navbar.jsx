"use client"

import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission and page reload
    const inputValue = event.target.elements.myInputName.value;
    router.push(`/search/${inputValue}`)
  };

  return (
    <div className="flex justify-between">
      <div className="hidden md:flex gap-[50px] items-center top-0 left-0">
        <div className="relative w-[169px] h-[45px]">
          <Image className="object-contain" src="/logo.png" fill />
        </div>
        <div className="flex gap-[30px]">
          <span>Movies</span>
          <span>Series</span>
          <span>New</span>
          <span>Popular</span>
        </div>
      </div>
      <div className="mt-[30px] md:mt-0 flex gap-[10px] items-center min-w-[235px] h-[45px] pl-4 bg-[rgba(255,255,255,0.15)] rounded-full">
        <div><SearchIcon /></div>
        <form onSubmit={handleSubmit}>
          <input name="myInputName" type="text" placeholder="Search for a movie.." className="bg-transparent w-[90%] pr-4 outline-none"/>
        </form>
      </div>
    </div>
  )
}