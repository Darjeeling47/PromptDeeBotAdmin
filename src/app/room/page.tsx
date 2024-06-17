"use client"

import RoomTable from "@/components/complex/table/RoomTable"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function Room() {
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  return (
    <main className='w-full'>
      {/* Header */}
      <div className='font-semibold text-3xl my-10'>ห้องแชท</div>

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
      </div>

      {/* Table */}
      <RoomTable />

      {/* Pagination */}
      <div className='w-full flex justify-center mt-5'>
        <Pagination count={10} shape='rounded' color='primary' />
      </div>
    </main>
  )
}
