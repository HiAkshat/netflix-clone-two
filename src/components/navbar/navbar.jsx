import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex gap-[50px] items-center top-0 left-0">
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
  )
}