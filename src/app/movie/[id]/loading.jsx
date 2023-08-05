import Navbar from "@/components/navbar/navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-[30px] md:gap-[50px] mb-[50px]">
      <Navbar />

      <div className="flex flex-2 flex-col lg:flex-row gap-[65px] mt-[100px] md:mt-[150px]">
        <Skeleton className="opacity-30 m-auto lg:m-0 w-[300px] h-[450px] rounded-none" />
        <div className="flex flex-1 flex-col max-w-[925px] gap-[53px]">
          <div className="flex flex-col gap-[25px] lg:gap-[20px]">
            <div className="flex flex-col md:flex-row md:items-end gap-[20px] flex-wrap">
              <Skeleton className="opacity-30 w-full md:w-[400px] h-[80px] rounded-full" />
                <div className="flex flex-col md:flex-row lg:items-end gap-[10px] lg:gap-[20px]">
                  <Skeleton className="opacity-30 w-[100px] h-[40px] rounded-full" />
                  <Skeleton className="opacity-30 w-[150px] h-[40px] rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Skeleton className="opacity-30 w-full h-[37px] rounded-full" />
              <Skeleton className="opacity-30 w-full h-[37px] rounded-full" />
              <Skeleton className="opacity-30 w-full h-[37px] rounded-full" />
            </div>

            <div className="flex items-center gap-[12px] max-w-fit">
              <Skeleton className="opacity-30 w-[60px] h-[60px] rounded-full" />
              <Skeleton className="opacity-30 w-[200px] h-[50px] rounded-full" />
            </div>
          </div>
      </div>
    </div>
  )
}