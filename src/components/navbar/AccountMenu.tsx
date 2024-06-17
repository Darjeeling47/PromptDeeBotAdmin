"use client"

import Link from "next/link"
import { useState } from "react"

export default function AccountMenu() {
  const [isSpan, setIsSpan] = useState(false)
  return (
    <>
      <button className='text-left flex justify-end'>
        <div
          className='bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer mx-5 hover:border-4 hover:border-gray-300 transition-all duration-200'
          onClick={() => setIsSpan(!isSpan)}>
          A
        </div>
        {isSpan ? (
          <div className='absolute bg-cgr-white py-5 rounded-lg shadow-lg mt-16 flex flex-col gap-y-4 z-[200]'>
            <h1 className='font-medium px-7 cursor-default'>Admin</h1>
            <h2 className='px-7 cursor-default'>admin@gmail.com</h2>
            <hr></hr>
            <Link href={"#"} className='px-7'>
              <i className='bi bi-gear-fill mr-2'></i>Setting
            </Link>
            <Link href={"#"} className='px-7'>
              <i className='bi bi-box-arrow-right mr-2'></i>Sign Out
            </Link>
          </div>
        ) : (
          ""
        )}
      </button>
      {isSpan ? (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 z-[100]'
          onClick={() => setIsSpan(false)}></div>
      ) : (
        ""
      )}
    </>
  )
}
