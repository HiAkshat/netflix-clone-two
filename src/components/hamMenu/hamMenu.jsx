"use client"

import { useRef, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

const HamMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOutsideClick = (event) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const menuRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      {/* Your menu icon/button that triggers the menu */}
      <div className="flex md:hidden cursor-pointer items-center featuredImg" onClick={handleMenuToggle}>
        <div><MenuIcon /></div>
      </div>

      {/* The sliding hamburger menu */}
      <div
        ref={menuRef}
        className={`hamburger-menu flex flex-col gap-[30px] pt-[30px] pr-[30px] fixed top-0 right-[-200px] w-[200px] h-full bg-[rgba(11,11,11,0.8)] transition-all duration-300 ease-in-out ${isOpen ? 'open' : ''}`}
        onClick={handleOutsideClick}
      >

        <div className='cursor-pointer flex justify-end' onClick={handleMenuToggle}><CloseIcon /></div>
        <div className="flex flex-col items-end gap-[30px] ">
          <Link href={`/`}><span className="text-xl">Home</span></Link>
          <Link href={`/Popular`}><span className="text-xl">Popular</span></Link>
          <Link href={`/New`}><span className="text-xl">New</span></Link>
          <Link href={`/Top Rated`}><span className="text-xl">Top Rated</span></Link>
        </div>

        {/* Insert your menu items here */}
      </div>

      <style jsx>{`
        .hamburger-menu.open {
          right: 0px;
        }
      `}</style>
    </>
  );
};

export default HamMenu;