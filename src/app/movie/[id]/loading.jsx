import Navbar from "@/components/navbar/navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-[30px] md:gap-[50px] mb-[50px]">
      <Navbar />

      <div className="flex flex-2 flex-col lg:flex-row gap-[65px]">
        <Skeleton className="m-auto lg:m-0 w-[300px] h-[450px] rounded-none" />
        <div className="flex flex-1 flex-col max-w-[925px] gap-[53px]">
            <div className="flex flex-col gap-[25px] lg:gap-[20px]">
              <div className="flex flex-col md:flex-row md:items-end gap-[20px] flex-wrap">
                <Skeleton className="w-full md:w-[400px] h-[80px] md:h-[100px] rounded-full" />
                <div className="flex flex-col md:flex-row lg:items-end gap-[10px] lg:gap-[20px]">
                  <Skeleton className="w-[100px] h-[50px] rounded-full" />
                  <Skeleton className="w-[150px] h-[50px] rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Skeleton className="w-full h-[37px] rounded-full" />
              <Skeleton className="w-full h-[37px] rounded-full" />
              <Skeleton className="w-full h-[37px] rounded-full" />
            </div>

            <div className="flex items-center gap-[12px] max-w-fit">
              <Skeleton className="w-[60px] h-[60px] rounded-full" />
              <Skeleton className="w-[200px] h-[50px] rounded-full" />
            </div>
          </div>
      </div>
    </div>
  )
}