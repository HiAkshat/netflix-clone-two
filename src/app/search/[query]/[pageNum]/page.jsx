"use client"

import Navbar from "@/components/navbar/navbar"
import {getMovieSearchData} from "@/api/getMovieData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MovieGrid from "@/components/movieGrid/movieGrid";

export default async function Page({params}) {
  const data = await getMovieSearchData(params.query, params.pageNum)

  if (params.pageNum == "1") {
    const PageNav = () => {
      return (
        <div className="w-full flex justify-end gap-[20px]">
          <Link href={`${parseInt(params.pageNum)-1}`}>
            <div><ArrowBackIosNewIcon /></div>
          </Link>
          <Link href={`${parseInt(params.pageNum)+1}`}>
            <div className="text-[#a1a1a1]"><ArrowForwardIosIcon /></div>
          </Link>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col gap-[30px] md:gap-[50px] pb-[50px]">
      <Navbar />

      <div className="flex flex-col gap-[10px] mt-[100px] md:mt-[150px]">
        <span className="text-[40px]">Showing search results for {decodeURIComponent(params.query)}</span>
        <span className="text-[20px] text-[#D9D9D9]">Page {data.page} of {data.total_pages}</span>
      </div>

      {data.results.length!=0 ? 
        <MovieGrid listData={data.results} />:
        <span className="text-[48px]">No results found :&#40;</span>
      }

      {params.pageNum == 1 && params.pageNum == data.total_pages &&
        <div className="w-full flex justify-end gap-[20px]">          
          <div className="text-[#D9D9D9]"><ArrowBackIosNewIcon /></div>            
          <div className="text-[#D9D9D9]"><ArrowForwardIosIcon /></div>
        </div>
      }

      {params.pageNum == 1 && params.pageNum != data.total_pages &&
        <div className="w-full flex justify-end gap-[20px]">
          <div className="text-[#919090]"><ArrowBackIosNewIcon /></div>

          <Link href={`${parseInt(params.pageNum)+1}`}>
            <div><ArrowForwardIosIcon /></div>
          </Link>
        </div>
      }

      {params.pageNum != 1 && params.pageNum != data.total_pages &&
        <div className="w-full flex justify-end gap-[20px]">          
          <Link href={`${parseInt(params.pageNum)-1}`}>
            <div><ArrowBackIosNewIcon /></div>
          </Link>
          
          <Link href={`${parseInt(params.pageNum)+1}`}>
            <div><ArrowForwardIosIcon /></div>
          </Link>
        </div>
      }

      {params.pageNum != 1 && params.pageNum == data.total_pages &&
        <div className="w-full flex justify-end gap-[20px]">          
          <Link href={`${parseInt(params.pageNum)-1}`}>
            <div><ArrowBackIosNewIcon /></div>
          </Link>
          
          <div className="text-[#919090]"><ArrowForwardIosIcon /></div>
        </div>
      }
    </div>
  )
}