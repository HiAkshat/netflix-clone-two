import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading({}) {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  // console.log(currentHour)

  return (
    <div className='flex flex-col gap-[20px] items-center justify-center absolute top-0 left-0 w-full min-h-screen'>
      <div className='absolute z-[-1] top-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,0.5)]'></div>
      <div className="flex items-center justify-start w-[90%] h-[40px]">
        <Link href={`/`}>
          <div className="cursor-pointer"><ArrowBackIosNewIcon fontSize="large"/></div>
        </Link>
      </div>
      {currentHour}
      <Skeleton className="opacity-30 w-[90%] h-[80vh] rounded-none" />
    </div>
  )
}