"use client"

import SelectCreateOption from "@/components/complex/button/SelectCreateOption"
import getProvinces from "@/libs/thaidatas/getProvinces"
import { Autocomplete, Button, TextField } from "@mui/material"
import { redirect, useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { useSession } from "next-auth/react"
import createCashBacks from "@/libs/cashBacks/createCashBacks"
import CashBackDescription from "@/components/complex/description/CashBackDescription"

export default function CashBack() {
  const router = useRouter()

  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  // handle title
  const title = "สร้างโอนคืนส่วนลด"
  const submitText = "สร้างโอนคืนส่วนลด"

  // all data required
  const [excelFile, setExcelFile] = useState<File | null>(null)

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

  const handleCreateCashBack = async () => {
    if (confirm("คุณต้องการสร้างโอนคืนส่วนลดใช่หรือไม่?") == false) {
      return
    }

    if (!excelFile) {
      alert("กรุณาเลือกไฟล์ excel")
      return
    } else {
      // create cash back
      const formData = new FormData()
      formData.append("excelFile", excelFile)
      const response = createCashBacks(session.user.token, formData)
      router.push("/cash-back")
    }
  }

  return (
    <main className='text-center w-full mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3/'>
      <h1 className='font-semibold text-3xl my-10'>{title}</h1>

      {/* Create Shop */}
      <div className='my-10'>
        <div className='text-left space-y-2'>
          <CashBackDescription />

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
        onClick={handleCreateCashBack}>
        {submitText}
      </Button>
    </main>
  )
}
