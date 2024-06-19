"use client"

import RoomTable from "@/components/complex/table/RoomTable"
import { RoomJson } from "@/interface/room"
import getRooms from "@/libs/rooms/getRooms"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function Room() {
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  const [rooms, setRooms] = useState<RoomJson>()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [available, setAvaliable] = useState(false)

  const fetchRooms = async () => {
    setAvaliable(false)
    const roomsFromFetch = await getRooms(
      session.user.token,
      `page=${page}&search=${search}`
    )
    setRooms(roomsFromFetch)
    setAvaliable(true)
  }

  useEffect(() => {
    fetchRooms()
  }, [page])

  const handleChangePage = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  return (
    <main className='w-full'>
      {/* Header */}
      <div className='font-semibold text-3xl my-10'>ห้องแชท</div>

      {/* Search and create
      <div className='flex flex-row justify-between mb-5'>
        <div className='flex flex-row space-x-5'>
          <TextField
            id='outlined-small'
            size='small'
            label='ค้นหา'
            variant='outlined'
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <Button variant='contained' onClick={fetchRooms}>
            ค้นหา
          </Button>
        </div>
      </div> */}

      {/* Table */}
      <RoomTable rooms={rooms?.rooms} available={available} session={session} />
      {/* Pagination */}
      <div className='w-full flex justify-center mt-5'>
        <Pagination
          count={rooms?.pagination?.last}
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
