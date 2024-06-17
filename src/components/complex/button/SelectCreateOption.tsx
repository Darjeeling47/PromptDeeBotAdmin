"use client"

import { useState } from "react"

export default function SelectCreateOption({
  option,
  onChange,
}: {
  option: string
  onChange: Function
}) {
  const [nowOption, setNowOption] = useState(option)

  const handleClick = (option: "excel" | "manual") => {
    setNowOption(option)
    onChange(option)
  }

  return (
    <div className='inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1'>
      <button
        className={`inline-block rounded-md px-4 py-2 text-sm  hover:text-gray-700 focus:relative ${
          nowOption === "manual" ? "bg-white text-blue-500" : "text-gray-500"
        }`}
        onClick={() => handleClick("manual")}>
        กรอกข้อมูล
      </button>

      <button
        className={`inline-block rounded-md px-4 py-2 text-sm hover:text-gray-700 focus:relative ${
          nowOption === "excel" ? "bg-white text-blue-500" : "text-gray-500"
        }`}
        onClick={() => handleClick("excel")}>
        ไฟล์ Excel
      </button>
    </div>
  )
}
