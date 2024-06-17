"use client"

import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"
import AccountMenu from "./AccountMenu"

export default function Navbar() {
  const pathName = usePathname().split("/")[1]
  const [isSpan, setIsSpan] = useState(false)

  useEffect(() => {
    if (isSpan) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isSpan])

  return (
    <div className='bg-white top-0 right-0 left-0 fixed flex w-screen items-center z-[100] shadow-sm'>
      <div className='container mx-auto py-2 h-12 hidden md:flex flex-row justify-between items-center'>
        <div className='font-medium text-pd-blue-100 drop-shadow-md'>
          Line Bot Prompt Dee
        </div>
        <div className='flex flex-row gap-x-10 h-full items-center justify-center'>
          {/* if you want to use navitem the icon that from bootstrap will like bi bi-house in this case use just house the nev item will change it for you*/}
          <NavItem href='/' pathName={pathName}>
            Home
          </NavItem>
          <NavItem href='/shop' pathName={pathName}>
            Shop
          </NavItem>
          <NavItem href='/room' pathName={pathName}>
            Room
          </NavItem>
          <NavItem href='/cash-back' pathName={pathName}>
            Cash back
          </NavItem>
          <AccountMenu />
        </div>
      </div>
      <div className='md:hidden container mx-auto'>
        <div className='flex justify-end py-2 h-12'>
          <div
            className='align-middle w-fit h-fit self-center cursor-pointer'
            onClick={() => setIsSpan(true)}>
            Menu{" "}
            {isSpan ? (
              <i className='bi bi-chevron-up'></i>
            ) : (
              <i className='bi bi-chevron-down'></i>
            )}
          </div>
          <AccountMenu />
        </div>
      </div>
      {isSpan ? (
        <div
          className='md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/20 my-backdrop-blur z-[100]'
          onClick={() => setIsSpan(false)}>
          <div className='container mx-auto py-2'>
            <div className='rounded-xl border mt-12 p-4 px-10 bg-white flex flex-col gap-2'>
              <div className='flex flex-row justify-between items-center my-3'>
                Navigation
                <i
                  className='bi bi-x-lg hover:text-black cursor-pointer transition-all duration-100 text-end '
                  onClick={() => setIsSpan(false)}></i>
              </div>
              <NavItem href='/' pathName={pathName}>
                Home
              </NavItem>
              <hr className='my-2' />
              <NavItem href='/shop' pathName={pathName}>
                Shop
              </NavItem>
              <hr className='my-2' />
              <NavItem href='/room' pathName={pathName}>
                Room
              </NavItem>
              <hr className='my-2' />
              <NavItem href='/cash-back' pathName={pathName}>
                Cash back
              </NavItem>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
