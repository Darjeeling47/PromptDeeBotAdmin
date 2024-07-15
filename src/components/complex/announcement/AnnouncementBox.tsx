import Image from "next/image"
import FlexGenerator from "../flexMessageTools/FlexGenerator"
import Link from "next/link"
import deleteAnnouncementTemplate from "@/libs/announcement/deleteAnnouncementTemplates"

export default function AnnouncementBox({
  id,
  name,
  contents,
  token,
}: {
  id: string
  name: string
  contents: any[]
  token: string
}) {
  const handleDeleteAnnouncement = async () => {
    if (!confirm("คุณต้องการลบรูปแบบใช่หรือไม่")) return

    // delete announcement
    const response = await deleteAnnouncementTemplate(token, id)

    if (response.success) {
      alert("ลบรูปแบบสำเร็จ")
      window.location.reload()
    }
  }

  return (
    <div className='flex flex-col'>
      <Link
        href={`/announcement/create-template?aid=${id}`}
        className='w-full border border-gray-400 rounded-xl overflow-hidden hover:brightness-75 transition-all duration-200 h-full'>
        <div className='flex justify-center overflow-hidden relative h-64 border-b border-gray-400'>
          <Image
            src={"/image/line_background.png"}
            alt='line background'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full z-[-1] absolute '></Image>
          <div className='flex items-start pt-5'>
            <FlexGenerator contents={contents}></FlexGenerator>
          </div>
        </div>
      </Link>
      <div className='flex flex-row justify-between text-xl py-5 font-semibold bg-white px-5'>
        <p>{name}</p>
        <i
          className='bi bi-trash-fill mr-2 text-gray-500'
          onClick={handleDeleteAnnouncement}></i>
      </div>
    </div>
  )
}
