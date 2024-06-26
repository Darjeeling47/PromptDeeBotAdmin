"use client"

import { Button } from "@mui/material"
import Link from "next/link"
import { useState } from "react"

export default function SettingButton({
  viewOption,
  editOption,
  deleteOption,
  viewFunction,
  editFunction,
  deleteFunction,
}: {
  viewOption?: boolean
  editOption?: boolean
  deleteOption?: boolean
  viewFunction?: Function
  editFunction?: Function
  deleteFunction?: Function
}) {
  const [isSpan, setIsSpan] = useState(false)
  return (
    <>
      <button className='text-left flex justify-end'>
        <div
          className='rounded-full w-9 h-9 flex justify-center items-center cursor-pointer mx-5 hover:border-4 hover:border-gray-300 transition-all duration-200'
          onClick={() => setIsSpan(!isSpan)}>
          <i className='bi bi-three-dots-vertical text-lg'></i>
        </div>
        {isSpan ? (
          <div className='bg-white absolute bg-cgr-white py-5 rounded-lg shadow-lg mt-10 flex flex-col gap-y-4 z-[200] border border-gray-50'>
            {viewOption ? (
              <div
                className='px-7 cursor-pointer'
                onClick={() => {
                  viewFunction ? viewFunction() : ""
                }}>
                <i className='bi bi-eye-fill mr-2'></i>View
              </div>
            ) : (
              ""
            )}
            {editOption ? (
              <div
                className='px-7 cursor-pointer'
                onClick={() => {
                  editFunction ? editFunction() : ""
                }}>
                <i className='bi bi-pen-fill mr-2'></i>Edit
              </div>
            ) : (
              ""
            )}
            {deleteOption ? (
              <div
                className='px-7 cursor-pointer'
                onClick={() => {
                  deleteFunction ? deleteFunction() : ""
                }}>
                <i className='bi bi-trash-fill mr-2'></i>Delete
              </div>
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
