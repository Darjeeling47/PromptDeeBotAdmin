"use client"

import { useState } from "react"

export default function AnnouncementDescription() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDescription = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className='w-full rounded-xl border border-gray-400 p-5 space-y-5 mb-5 hover:bg-slate-200 transition-all duration-200 cursor-pointer flex flex-row justify-between text-left'
        onClick={handleOpenDescription}>
        รายละเอียด และวิธีการสร้างการแจ้งเตือน
        {isOpen ? (
          <i className='bi bi-chevron-up ml-2'></i>
        ) : (
          <i className='bi bi-chevron-down ml-2'></i>
        )}
      </div>
      {isOpen ? (
        <>
          <div className='w-full rounded-xl border border-gray-400 p-5 space-y-5 mb-5'>
            <h1 className='text-lg font-medium'>
              วิธีการอัปโหลดไฟล์ และรูปแบบไฟล์พื้นฐาน
            </h1>
            <div className='space-y-2'>
              <p>1. ไฟล์ที่ใช้จะต้องเป็นไฟล์ excel ที่มีชื่อคอลัมน์ ดังนี้</p>
              <ol className='pl-3 list-disc list-inside'>
                <li>shopCode : ใส่รหัสร้านค้าเป็นตัวเลข 5 หลัก</li>
                <li>text : ใส่ข้อความที่ต้องการแจ้งเตือน</li>
                <li>
                  type : รูปแบบและขนาดข้อความซึ่งมีดังนี้
                  <ol className='pl-4 list-disc list-inside font-light'>
                    <li>header : ข้อมูลนี้จะอยู่บนสุดของข้อความเป็นหัวข้อ</li>
                    <li>5xl, 4xl ... sm, xs : ขนาดข้อความ</li>
                    <li>
                      link : เป็นปุ่มที่จะพาคนที่กดไปลิ้งค์ที่คุนใส่ในช่อง text
                    </li>
                    <li>
                      action : เป็นปุ่มที่หากมีคนกดก็จะเป็นการส่งข้อความตามช่อง
                      text
                    </li>
                  </ol>
                </li>
                <li>
                  wieght : ใส่ความหนาของข้อความซึ่งถ้าเป็น bold จะเป็นตัวหนา
                </li>
                <li>
                  align : เป็นการระบุตำแหน่งซึ่งมี 3 ส่วนดังนี้
                  <ol className='pl-4 list-disc list-inside font-light'>
                    <li>start : ชิดขอบซ้าย</li>
                    <li>center : อยู่ตรงกลาง</li>
                    <li>end : ชิดขอบขวา</li>
                  </ol>
                </li>
                <li>
                  color : เป็นสีที่จะอยู่ในรูปแบบ #RRGGBB (HEX) แต่ใน Excel จะมี
                  color picker ให้สามารถกดเลือกได้เลย
                </li>
                <li>
                  seperator :
                  เป็นการระบุว่าใต้ข้อความนี้ต้องการใส่เส้นแบ่งหรือไม่ หากเป็น
                  TRUE จะนับว่าใส่
                </li>
              </ol>
            </div>
            <div className='space-y-2'>
              <p>2. วิธีการใส่ข้อมูลเพื่อให้ส่งรายการโอนคืนได้อย่างถูกต้อง</p>
              <ol className='pl-3 list-disc list-inside'>
                <li>ในหนึ่งแถวของ excel จะสามารถใส่ได้เพียง 1 text </li>
                <li>
                  หากหนึ่งร้านค้ามีหลาย text ให้ใส่ข้อมูล text หลายแถวแต่ใส่
                  shopCode เดียวกันในทุกแถว
                  ระบบจะทำการจับกลุ่มข้อความให้อัตโนมัติ
                </li>
                <li>
                  ระบบการจับกลุ่มข้อความมีเงื่อนไข คือ shopCode cycleDate และ
                  payDate จะต้องเหมือนกันทั้งหมดถึงจะนับเป็น 1 ข้อความ
                </li>
                <li>
                  การแสดงผลข้อมูลระบบจำอ่านจากแถวน้อยไปมากจึงทำให้ข้อมูลในแถวข้างบนจะปรากฎในข้อความก่อนแถวข้างล่าง
                </li>
                <li>
                  การใส่ร้านค้าจะต้องเป็นร้านค้าที่มีอยู่ในระบบเท่านั้นมิเช่นนั้นระบบจะทำการส่งข้อความกลับมาให้ผู้ส่งว่าไม่สามารถหาร้านค้าได้
                </li>
                <li>
                  การปรับแต่งดังกล่าวสามารถปรับหลายอย่าง (คนละ column)
                  พร้อมกันได้
                </li>
              </ol>
            </div>
            <p>หมายเหตุ ระบบจะเป็บข้อมูลข้อความที่ส่งแล้วทุกครั้ง</p>
            <p>
              ท่านสามารถ download ไฟล์ข้างล่างนี้เพื่อเป็นต้นฉบับในการใช้งานได้
            </p>
          </div>

          <div className='w-full rounded-xl border border-gray-400 relative hover:bg-slate-200 transition-all duration-200'>
            <a
              href='../../excel/announcement_template.xlsx'
              className='w-full h-full p-5 block'
              download>
              <i className='bi bi-file-earmark-spreadsheet-fill mr-2'></i>
              ดาวน์โหลดไฟล์ตัวอย่าง
            </a>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  )
}
