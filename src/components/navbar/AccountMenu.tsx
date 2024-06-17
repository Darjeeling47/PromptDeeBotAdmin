"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"

export default function AccountMenu() {
  const [isSpan, setIsSpan] = useState(false)
  const [loginTitle, setLoginTitle] = useState("Login")
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      setLoginTitle(session.user.email)
      console.log("session user = " + session.user)
    } else {
      setLoginTitle("Login")
    }
  }, [session])

  return (
    <>
      <button className='text-left flex justify-end'>
        <div
          className='bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer mx-5 hover:border-4 hover:border-gray-300 transition-all duration-200'
          onClick={() => setIsSpan(!isSpan)}>
          A
        </div>
        {isSpan ? (
          <div className='bg-white absolute bg-cgr-white py-5 rounded-lg shadow-lg mt-16 flex flex-col gap-y-4 z-[200]'>
            <h1 className='font-medium px-7 cursor-default'>
              {loginTitle == "Login" ? "Login" : "Admin"}
            </h1>
            <h2 className='px-7 cursor-default'>{loginTitle}</h2>
            {session ? (
              <>
                <hr></hr>
                <Link href={"#"} className='px-7'>
                  <i className='bi bi-gear-fill mr-2'></i>Setting
                </Link>
                <div
                  className='px-7'
                  onClick={() => signOut({ callbackUrl: "/login" })}>
                  <i className='bi bi-box-arrow-right mr-2'></i>Sign Out
                </div>
              </>
            ) : (
              ""
            )}
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
