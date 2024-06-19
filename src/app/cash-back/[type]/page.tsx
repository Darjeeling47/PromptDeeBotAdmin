"use client"

import SelectCreateOption from "@/components/complex/button/SelectCreateOption"
import getProvinces from "@/libs/thaidatas/getProvinces"
import { Autocomplete, Button, TextField } from "@mui/material"
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"
import { styled } from "@mui/material/styles"

export default function Shop({ params }: { params: { type: string } }) {
  const router = useRouter()

  // handle with type of page
  if (params.type !== "create" && params.type !== "edit") {
    router.back()
    return
  }

  // handle title
  const title =
    params.type === "create" ? "สร้างโอนคืนส่วนลด" : "แก้ไขโอนคืนส่วนลด"
  const submitText =
    params.type === "create" ? "สร้างโอนคืนส่วนลด" : "แก้ไขโอนคืนส่วนลด"

  // all data required
  const [excelFile, setExcelFile] = useState<File | null>(null)
  const [shopName, setShopName] = useState<string>("")
  const [shopCode, setShopCode] = useState<string>("")
  const [province, setProvince] = useState<optionType | null>(null)
  const [score, setScore] = useState<number | null>(null)

  // option to create shop
  const [option, setOption] = useState<"excel" | "manual">("manual")

  // data for autocomplete
  const [provincesList, setProvincesList] = useState<optionType[]>([])
  interface optionType {
    id: number
    name: string
  }
  const fetchProvinces = async () => {
    const fetchedProvinces = await getProvinces()
    setProvincesList(
      fetchedProvinces.map((element: any) => ({
        id: element.id,
        name: element.name_th,
      }))
    )
  }

  // fetch provinces
  useEffect(() => {
    fetchProvinces()
  }, [])

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
    <main className='text-center w-full mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3/'>
      <h1 className='font-semibold text-3xl my-10'>{title}</h1>

      {/* Option selector for create new shop */}
      {params.type === "create" ? (
        <SelectCreateOption option='manual' onChange={setOption} />
      ) : (
        ""
      )}

      {/* Create Shop */}
      <div className='my-10'>
        {option === "manual" ? (
          <div className='text-left flex flex-col space-y-4'>
            <h2 className='font-medium text-lg'>กรอกข้อมูล</h2>
            <TextField
              id='outlined-basic'
              label='ชื่อร้านค้า'
              variant='outlined'
              className='w-full'
              onChange={(e) => {
                setShopName(e.target.value)
              }}
            />
            <TextField
              id='outlined-basic'
              label='รหัสร้านค้า'
              variant='outlined'
              className='w-full'
              onChange={(e) => {
                setShopCode(e.target.value)
              }}
            />
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={provincesList}
              sx={{ width: 300 }}
              className='!w-full'
              getOptionLabel={(option: optionType) => `${option.name}`}
              onChange={(event, newValue) => {
                if (newValue) {
                  setProvince({ name: newValue.name, id: newValue.id })
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label='จังหวัด' className='w-full' />
              )}
            />
            <TextField
              id='outlined-basic'
              label='คะแนนร้านค้า'
              variant='outlined'
              className='w-full'
              onChange={(e) => {
                setScore(parseInt(e.target.value))
              }}
            />
          </div>
        ) : (
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
        )}
      </div>

      {/* Submit */}
      <Button variant='contained' color='primary' className='mt-10 w-full'>
        {submitText}
      </Button>
    </main>
  )
}
