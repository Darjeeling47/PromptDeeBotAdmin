"use client"

import CashBackTable from "@/components/complex/table/CashBackTable"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Link from "next/link"
import CashBackShopList from "@/components/complex/list/CashBackShopList"
import CashBackDetailTable from "@/components/complex/table/CashBackDetailTable"

export default function CashBack() {
  return (
    <main className='w-full flex flex-col space-y-10'>
      {/* Header */}
      <div className='font-semibold text-3xl mt-10'>โอนคืนส่วนลด</div>

      {/* cashback shop list */}
      <CashBackShopList />

      {/* cashback table */}
      <CashBackDetailTable />
    </main>
  )
}
