"use client"

import ShopTable from "@/components/complex/table/ShopTable"
import { ShopJson } from "@/interface/shop"
import getShops from "@/libs/shops/getShops"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import { get } from "http"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { use, useEffect, useState } from "react"

export default function Shop() {
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  const [shops, setShops] = useState<ShopJson>()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [available, setAvaliable] = useState(false)

  const fetchShops = async () => {
    setAvaliable(false)
    const shopsFromFetch = await getShops(
      session.user.token,
      `page=${page}&search=${search}`
    )
    setShops(shopsFromFetch)
    setAvaliable(true)
  }

  useEffect(() => {
    fetchShops()
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
      <div className='font-semibold text-3xl my-10'>ร้านค้า</div>

      {/* Search and create */}
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
          <Button variant='contained' onClick={fetchShops}>
            ค้นหา
          </Button>
        </div>
        <Link href='/shop/create'>
          <Fab
            color='primary'
            aria-label='add'
            size='medium'
            variant='extended'
            className='!z-[0]'>
            สร้างร้านค้า<i className='bi bi-plus-lg text-xl ml-2'></i>
          </Fab>
        </Link>
      </div>

      {/* Table */}
      <ShopTable shops={shops?.shops} available={available} />

      {/* Pagination */}
      <div className='w-full flex justify-center mt-5'>
        <Pagination
          count={shops?.pagination?.last}
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
