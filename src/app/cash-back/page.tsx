"use client"

import CashBackTable from "@/components/complex/table/CashBackTable"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import getCashBacks from "@/libs/cashBacks/getCashBacks"
import { CashBackJson } from "@/interface/cashBack"

export default function CashBack() {
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  const [cashBacks, setCashBacks] = useState<CashBackJson>()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [startDate, setStartDate] = useState<Date>(new Date(1900, 0, 0))
  const [endDate, setEndDate] = useState<Date>(new Date(Date.now()))
  const [available, setAvaliable] = useState(false)

  const fetchCashBacks = async () => {
    setAvaliable(false)
    const roomsFromFetch = await getCashBacks(
      session.user.token,
      `page=${page}&search=${search}&startDate=${startDate}&endDate=${endDate}`
    )
    setCashBacks(roomsFromFetch)
    setAvaliable(true)
  }

  useEffect(() => {
    fetchCashBacks()
  }, [page])

  const handleChangePage = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const handleStartDate = async (newValue: any) => {
    if (newValue) {
      setStartDate(new Date(newValue))
    } else {
      setStartDate(new Date(1900, 0, 0))
    }
  }

  const handleEndDate = async (newValue: any) => {
    if (newValue) {
      setEndDate(new Date(newValue))
    } else {
      setEndDate(new Date(Date.now()))
    }
  }

  return (
    <main className='w-full'>
      {/* Header */}
      <div className='font-semibold text-3xl my-10'>โอนคืนส่วนลด</div>

      {/* Search and create */}
      <div className='flex flex-col md:flex-row justify-between mb-5 space-y-5 md:space-y-0'>
        <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
          {/* <TextField
            id='outlined-small'
            size='small'
            label='ค้นหา'
            variant='outlined'
          /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label='วันแรก'
              slotProps={{ textField: { size: "small" } }}
              onChange={(newValue) => handleStartDate(newValue)}
            />
            <DatePicker
              label='วันสุดท้าย'
              slotProps={{ textField: { size: "small" } }}
              onChange={(newValue) => handleEndDate(newValue)}
            />
          </LocalizationProvider>
          <Button variant='contained' onClick={fetchCashBacks}>
            ค้นหา
          </Button>
        </div>
        <Link href='/cash-back/create'>
          <Fab
            color='primary'
            aria-label='add'
            size='medium'
            variant='extended'
            className='!z-[0]'>
            สร้างการแจ้งเตือน<i className='bi bi-plus-lg text-xl ml-2'></i>
          </Fab>
        </Link>
      </div>

      {/* Table */}
      <CashBackTable
        cashBacks={cashBacks?.cashBacks}
        available={available}
        session={session}
      />

      {/* Pagination */}
      <div className='w-full flex justify-center mt-5'>
        <Pagination
          count={cashBacks?.pagination?.last}
          shape='rounded'
          color='primary'
          siblingCount={2}
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </main>
  )
}
