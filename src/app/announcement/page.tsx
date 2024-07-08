"use client"

import AnnouncementDescription from "@/components/complex/description/AnnouncementDescription"
import createAnnouncements from "@/libs/announcement/createAnnouncements"
import { Button } from "@mui/material"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react"
import styled from "styled-components"

export default function Announcement() {
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  // handle title
  const title = "สร้างการแจ้งเตือน"
  const submitText = "สร้างการแจ้งเตือน"

  // all data required
  const [excelFile, setExcelFile] = useState<File | null>(null)

  const handleCreateAnnouncement = async () => {
    if (confirm("คุณต้องการสร้างการแจ้งเตือนใช่หรือไม่?") == false) {
      return
    }

    if (!excelFile) {
      alert("กรุณาเลือกไฟล์ excel")
      return
    } else {
      // create announcement
      const formData = new FormData()
      formData.append("excelFile", excelFile)
      const response = await createAnnouncements(session.user.token, formData)
      alert("สำเร็จแล้ว")
    }
  }

  // visually hidden input
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  })

  return (
    <main className='w-full mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3/'>
      <h1 className='font-semibold text-3xl my-10'>{title}</h1>

      <AnnouncementDescription />

      {/* Create Shop */}
      <div className='my-10'>
        <div className='text-left space-y-2'>
          <h2 className='font-medium text-lg'>ไฟล์ excel</h2>
          <Button
            component='label'
            variant='contained'
            role={undefined}
            color='success'
            className='w-full'
            tabIndex={-1}
            startIcon={<i className='bi bi-cloud-arrow-up-fill'></i>}>
            {excelFile ? excelFile.name : "เลือกไฟล์ excel"}
            <VisuallyHiddenInput
              type='file'
              onChange={(e) =>
                setExcelFile(e.target.files ? e.target.files[0] : null)
              }
            />
          </Button>
        </div>
      </div>

      {/* Submit */}
      <Button
        variant='contained'
        color='primary'
        className='mt-10 w-full'
        onClick={handleCreateAnnouncement}>
        {submitText}
      </Button>
    </main>
  )
}
