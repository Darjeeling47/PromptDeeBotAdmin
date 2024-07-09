"use client"

import { useState } from "react"

export default function CashBackDescription() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDescription = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className='w-full rounded-xl border border-gray-400 p-5 space-y-5 mb-5 hover:bg-slate-200 transition-all duration-200 cursor-pointer flex flex-row justify-between'
        onClick={handleOpenDescription}>
        รายละเอียด และวิธีการสร้างโอนคืนส่วนลด
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
                <li>orderCode : ใส่ชื่อหรือรหัสของรายการโอนคืนส่วนลด</li>
                <li>
                  orderAmount : ใส่จำนวนเงินของรายการโอนคืนส่วนลด
                  ต้องเป็นตัวเลขเท่านั้น
                </li>
                <li>
                  cycleDate : ใส่รอบวันที่ของโอนคืนส่วนลดในรูปแบบ วว/ดด/ปปปป
                  (ค.ศ.)
                </li>
                <li>payDate : ใส่วันที่ในการโอนในรูปแบบ วว/ดด/ปปปป (ค.ศ.)</li>
              </ol>
            </div>
            <div className='space-y-2'>
              <p>2. วิธีการใส่ข้อมูลเพื่อให้ส่งรายการโอนคืนได้อย่างถูกต้อง</p>
              <ol className='pl-3 list-disc list-inside'>
                <li>ในหนึ่งแถวของ excel จะสามารถใส่ได้เพียง 1 order </li>
                <li>
                  หากหนึ่งร้านค้ามีหลาย order ให้ใส่ข้อมูล order หลายแถวแต่ใส่
                  shopCode เดียวกันในทุกแถว
                  ระบบจะทำการจับกลุ่มข้อความให้อัตโนมัติ
                </li>
                <li>
                  ระบบการจับกลุ่มข้อความมีเงื่อนไข คือ shopCode cycleDate และ
                  payDate จะต้องเหมือนกันทั้งหมดถึงจะนับเป็น 1 ข้อความ
                </li>
                <li>
                  การแสดงผลข้อมูลระบบจำอ่านจากข้างบนลงข้างล่างจึงทำให้ข้อมูลในแถวข้างบนจะปรากฎในข้อความก่อนแถวข้างล่าง
                </li>
                <li>
                  การใส่ร้านค้าจะต้องเป็นร้านค้าที่มีอยู่ในระบบเท่านั้นมิเช่นนั้นระบบจะทำการส่งข้อความกลับมาให้ผู้ส่งว่าไม่สามารถหาร้านค้าได้
                </li>
              </ol>
            </div>
            <p>
              ท่านสามารถ download ไฟล์ข้างล่างนี้เพื่อเป็นต้นฉบับในการใช้งานได้
            </p>
          </div>

          <div className='w-full rounded-xl border border-gray-400 relative hover:bg-slate-200 transition-all duration-200'>
            <a
              href='../../excel/cashback_template.xlsx'
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
