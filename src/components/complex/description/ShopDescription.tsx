"use client"

import { useState } from "react"

export default function ShopDescription() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDescription = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className='w-full rounded-xl border border-gray-400 p-5 space-y-5 mb-5 hover:bg-slate-200 transition-all duration-200 cursor-pointer flex flex-row justify-between'
        onClick={handleOpenDescription}>
        รายละเอียด และวิธีการสร้างร้านค้า
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
                <li>name : ใส่ชื่อของร้านค้านั้น ๆ</li>
                <li>province : ใส่ชื่อจังหวัดเป็นภาษาไทย</li>
                <li>score : ใส่คะแนนร้านค้า เป็นตัวเลขระหว่าง 0 - 10</li>
              </ol>
            </div>
            <div className='space-y-2'>
              <p>2. วิธีการใส่ข้อมูลเพื่อให้ส่งรายการโอนคืนได้อย่างถูกต้อง</p>
              <ol className='pl-3 list-disc list-inside'>
                <li>ในหนึ่งแถวของ excel จะสามารถใส่ได้เพียง 1 shop</li>
                <li>
                  การสร้างร้านค้าห้ามใส่รหัสร้านค้าที่มีอยู่แล้ว
                  แต่สามารถใส่ชื่อซ้ำได้
                </li>
                <li>shopCode name province จะต้องใส่เสมอ</li>
                <li>คะแนนร้านค้าไม่จำเป็นต้องใส่ก็ได้แต่ระบบจะให้เป็น 0</li>
              </ol>
            </div>
            <p>หมายเหตุ ระบบจะเป็บข้อมูลข้อความที่ส่งแล้วทุกครั้ง</p>
            <p>
              ท่านสามารถ download ไฟล์ข้างล่างนี้เพื่อเป็นต้นฉบับในการใช้งานได้
            </p>
          </div>

          <div className='w-full rounded-xl border border-gray-400 relative hover:bg-slate-200 transition-all duration-200'>
            <a
              href='../../excel/shop_template.xlsx'
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
