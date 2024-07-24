"use client"

import { getServerSession } from "next-auth"
import Image from "next/image"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Link from "next/link"
import getAnnouncementTemplate from "@/libs/announcement/getAnnouncementTemplate"
import AnnouncementBox from "@/components/complex/announcement/AnnouncementBox"
import { useEffect, useState } from "react"
import getAnnouncementTemplates from "@/libs/announcement/getAnnouncementTemplates"
import { useSession } from "next-auth/react"

export default function Home() {
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
    <main className='container mx-auto py-10'>
      <h1 className='text-3xl font-semibold text-center text-pd-blue-100'>
        Prompt Dee Line Bot Manager
      </h1>
      <div className='my-10 grid grid-cols-3 space-x-10'>
        <Link
          href={"/cash-back"}
          className='shadow-md p-5 rounded-lg flex flex-col space-y-5 justify-center items-center'>
          <i className='bi bi-wallet2 text-5xl'></i>
          <div className='text-lg'>Cash Back</div>
        </Link>
        <Link
          href={"/announcement"}
          className='shadow-md p-5 rounded-lg flex flex-col space-y-5 justify-center items-center'>
          <i className='bi bi-megaphone text-5xl'></i>
          <div className='text-lg'>Announcement</div>
        </Link>
        <Link
          href={"/shop"}
          className='shadow-md p-5 rounded-lg flex flex-col space-y-5 justify-center items-center'>
          <i className='bi bi-shop text-5xl'></i>
          <div className='text-lg'>Shop</div>
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
