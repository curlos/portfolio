import React, { useEffect, useState } from "react";

interface Props {
  isOpen: any,
  setIsOpen: any
}

const Sidenav = ({ isOpen, setIsOpen }: Props) => {


  return (
    <div className={`${!isOpen ? 'hidden' : ''} sm:hidden fixed z-20 w-screen h-screen bg-red-500`} onClick={() => setIsOpen(false)}>
      <aside className={`transform z-50 top-0 right-0 bg-white text-black dark:bg-black dark:text-white fixed h-full ease-in-out transition-all duration-1000 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-10/12 xl:w-10/12`} onClick={(e) => e.stopPropagation()}>
        <div className="p-10 text-2xl font-medium flex flex-col justify-between h-screen">
          <div className="space-y-2">
            <a href="/">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                <i className="fas fa-home" />
                Home
              </div>
            </a>

            <a href="/">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                <i className="fas fa-home" />
                Home
              </div>
            </a>

            <a href="/">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                <i className="fas fa-home" />
                Home
              </div>
            </a>

            <a href="/">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                <i className="fas fa-home" />
                Home
              </div>
            </a>
          </div>

        </div>

      </aside>
    </div>
  )
}

export default Sidenav;