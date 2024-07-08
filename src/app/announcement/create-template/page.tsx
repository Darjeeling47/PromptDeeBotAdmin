"use client"

import DetailForm from "@/components/complex/flexMessageTools/DetailForm"
import Image from "next/image"
import { useEffect, useState } from "react"

/*
content = {
  id : int
  text : string
  type : string (header, 5xl, 4xl, 3xl, xxl, xl, lg, md, sm, xs, link, action)
  align : string (start end center)
  color : string (#RRGGBB)
  seperator : boolean
}
*/

export default function AnnouncementCreatetor() {
  const [focusContentId, setFocusContentId] = useState<number | null>()
  const [contents, setContents] = useState([])

  return (
    <main className='mx-auto w-full flex flex-col space-y-10'>
      <div className='font-semibold text-3xl my-10'>สร้างการแจ้งเตือนเอง</div>

      <div className='w-full grid grid-cols-3 gap-5 place-content-stretch'>
        <div className='border border-gray-400 rounded-xl overflow-hidden relative'>
          <Image
            src={"/image/line_background.png"}
            alt='line background'
            width={0}
            height={0}
            sizes='100vh'
            className='w-full h-full z-[-1] absolute'></Image>
          <div className='z-[1]'>{/* Components */}</div>
        </div>
        <div className='border border-gray-400 rounded-xl'></div>
        <div className='border border-gray-400 rounded-xl'>
          <DetailForm />
        </div>
      </div>
    </main>
  )
}
