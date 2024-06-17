"use client"

import ShopTable from "@/components/complex/table/ShopTable"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import Link from "next/link"

export default function Shop() {
  return (
    <main className='w-full'>
      {/* Header */}
      <div className='font-semibold text-3xl my-10'>ร้านค้า</div>

      {/* Search and create */}
      <div className='flex flex-row justify-between mb-5'>
        <div className='flex flex-row space-x-5'>
          <TextField
            id='outlined-small'
            size='small'
            label='ค้นหา'
            variant='outlined'
          />
          <Button variant='contained'>ค้นหา</Button>
        </div>
        <Link href='/shop/create'>
          <Fab
            color='primary'
            aria-label='add'
            size='medium'
            variant='extended'
            className='z-[0]'>
            สร้างร้านค้า<i className='bi bi-plus-lg text-xl ml-2'></i>
          </Fab>
        </Link>
      </div>

      {/* Table */}
      <ShopTable />

      {/* Pagination */}
      <div className='w-full flex justify-center mt-5'>
        <Pagination count={10} shape='rounded' color='primary' />
      </div>
    </main>
  )
}
