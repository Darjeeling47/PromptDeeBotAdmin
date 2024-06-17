"use client"

import CashBackTable from "@/components/complex/table/CashBackTable"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Link from "next/link"

export default function CashBack() {
  return (
    <main className='w-full'>
      {/* Header */}
      <div className='font-semibold text-3xl my-10'>โอนคืนส่วนลด</div>

      {/* Search and create */}
      <div className='flex flex-col md:flex-row justify-between mb-5 space-y-5 md:space-y-0'>
        <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
          <TextField
            id='outlined-small'
            size='small'
            label='ค้นหา'
            variant='outlined'
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label='วันแรก'
              slotProps={{ textField: { size: "small" } }}
            />
            <DatePicker
              label='วันสุดท้าย'
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
          <Button variant='contained'>ค้นหา</Button>
        </div>
        <Link href='/cash-back/create'>
          <Fab
            color='primary'
            aria-label='add'
            size='medium'
            variant='extended'
            className='z-[0]'>
            สร้างใบเสร็จ<i className='bi bi-plus-lg text-xl ml-2'></i>
          </Fab>
        </Link>
      </div>

      {/* Table */}
      <CashBackTable />

      {/* Pagination */}
      <div className='w-full flex justify-center mt-5'>
        <Pagination count={10} shape='rounded' color='primary' />
      </div>
    </main>
  )
}
