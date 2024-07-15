"use client"

import AnnouncementDescription from "@/components/complex/description/AnnouncementDescription"
import createAnnouncements from "@/libs/announcement/createAnnouncements"
import { Button } from "@mui/material"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import styled from "styled-components"
import styles from "./styles.module.css"
import getAnnouncementTemplates from "@/libs/announcement/getAnnouncementTemplates"
import AnnouncementBox from "@/components/complex/announcement/AnnouncementBox"

export default function Announcement() {
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  const [announcementTemplate, setAnnouncementTemplate] = useState<any>([])

  const fetchAnnouncementTemplate = async () => {
    const newAnnouncementTemplate = await getAnnouncementTemplates(
      session.user.token
    )
    setAnnouncementTemplate(newAnnouncementTemplate.announcements)
  }

  useEffect(() => {
    fetchAnnouncementTemplate()
  }, [])

  return (
    <main className='w-full'>
      {/* Header */}
      <div className='font-semibold text-3xl my-10'>การแจ้งเตือน</div>

      {/* Navigate Button */}
      <div className='flex flex-row space-x-10'>
        <Link href='/announcement/create-template' className='w-full'>
          <div
            className={`p-3 w-full flex items-center justify-center text-lg ${styles.gradientborder}`}>
            สร้างการแจ้งเตือนเอง
          </div>
        </Link>
        <Link href='/announcement/create' className='w-full'>
          <div
            className={`p-3 w-full flex items-center justify-center text-lg ring-[3px] ring-gray-400 hover:bg-gray-400 transition-all duration-200 rounded-xl`}>
            สร้างการแจ้งเตือนแบบ EXCEL
          </div>
        </Link>
      </div>

      {/* Template */}
      <div className='font-semibold text-xl my-10'>
        การแจ้งเตือนเริ่มต้นให้เลือก
      </div>

      <div className='w-full grid grid-cols-3 gap-5 place-content-stretch'>
        {announcementTemplate.map((template: any) => {
          return (
            <AnnouncementBox
              id={template._id}
              name={template.name}
              contents={template.contents}
              token={session.user.token}
            />
          )
        })}
      </div>
    </main>
  )
}
