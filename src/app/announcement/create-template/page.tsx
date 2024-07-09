"use client"

import DetailForm from "@/components/complex/flexMessageTools/DetailForm"
import FlexGenerator from "@/components/complex/flexMessageTools/FlexGenerator"
import StructureList from "@/components/complex/flexMessageTools/StructureList"
import { Button, colors, TextField } from "@mui/material"
import Image from "next/image"
import { sep } from "path"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"

/*
content = {
  text : string
  type : string (header, 5xl, 4xl, 3xl, xxl, xl, lg, md, sm, xs, link, action)
  align : string (start end center)
  color : string (#RRGGBB)
  seperator : boolean
}
*/

export default function AnnouncementCreatetor() {
  const [focusContentId, setFocusContentId] = useState<number>(0)
  const [contents, setContents] = useState([
    {
      text: "header",
      type: "header",
      align: "center",
      color: "#4b5563",
      seperator: false,
      bold: false,
    },
  ])

  return (
    <main className='mx-auto w-full flex flex-col space-y-5'>
      <div className='font-semibold text-3xl my-10'>สร้างการแจ้งเตือนเอง</div>

      <div className='w-full grid grid-cols-3 gap-5 place-content-stretch text-center'>
        <div className='border border-gray-400 rounded-xl overflow-hidden relative py-3 text-xl font-medium bg-blue-600 text-white'>
          <h1>ตัวอย่าง</h1>
        </div>
        <div className='border border-gray-400 rounded-xl py-3 text-xl font-medium bg-blue-600 text-white'>
          <h1>โครงสร้าง</h1>
        </div>
        <div className='border border-gray-400 rounded-xl py-3 text-xl font-medium bg-blue-600 text-white'>
          <h1>รายละเอียด</h1>
        </div>
      </div>

      <div className='w-full grid grid-cols-3 gap-5 place-content-stretch'>
        <div className='border border-gray-400 rounded-xl overflow-hidden relative min-h-96 max-h-[35rem]'>
          <Image
            src={"/image/line_background.png"}
            alt='line background'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full z-[-1] absolute'></Image>
          <div className='flex p-10 justify-center h-full w-full z-[1] content-start overflow-y-scroll'>
            <FlexGenerator
              contents={contents}
              setContents={setContents}
              focusContentId={focusContentId}
              setFocusContentId={setFocusContentId}
            />
          </div>
        </div>
        <div className='border border-gray-400 rounded-xl overflow-y-scroll min-h-96 max-h-[35rem]'>
          <StructureList
            contents={contents}
            setContents={setContents}
            focusContentId={focusContentId}
            setFocusContentId={setFocusContentId}
          />
        </div>
        <div className='border border-gray-400 rounded-xl min-h-96 max-h-[35rem]'>
          <DetailForm
            contents={contents}
            setContents={setContents}
            focusContentId={focusContentId}
            setFocusContentId={setFocusContentId}
          />
        </div>
      </div>

      <div className='flex flex-row justify-between gap-3'>
        <div
          className={`p-3 w-full flex items-center justify-center text-lg ${styles.gradientborder}`}>
          บันทึกรูปแบบ
        </div>
        <div
          className={`p-3 w-full flex items-center justify-center text-lg ring-[3px] ring-gray-400 hover:bg-gray-400 transition-all duration-200 rounded-xl`}>
          นำออกเป็น excel
        </div>
      </div>

      <hr></hr>

      <div className='flex justify-center my-10 w-full'>
        <TextField
          id='outlined-multiline-flexible'
          label='รหัสร้านค้า'
          className='w-full'
          multiline
          maxRows={5}
        />
      </div>

      {/* Submit */}
      <Button
        variant='contained'
        color='primary'
        className='mt-10 w-full'
        size='large'
        onClick={() => {}}>
        สร้างการแจ้งเตือน
      </Button>
    </main>
  )
}
