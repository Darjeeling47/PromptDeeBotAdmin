"use client"

import CashBackTable from "@/components/complex/table/CashBackTable"
import { Button, Fab, Pagination, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Link from "next/link"
import CashBackShopList from "@/components/complex/list/CashBackShopList"
import CashBackDetailTable from "@/components/complex/table/CashBackDetailTable"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import getCashBack from "@/libs/cashBacks/getCashBack"
import { use, useEffect, useState } from "react"
import { CashBackFull } from "@/interface/cashBack"
import createCashBacksNoti from "@/libs/cashBacks/createCashBackNoti"

export default function CashBack({ params }: { params: { cbid: string } }) {
  const { data: session } = useSession()
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  const cashBackId = params.cbid
  const [cashBack, setCashBack] = useState<CashBackFull>()
  const [available, setAvaliable] = useState(false)

  const fetchCashBack = async () => {
    setAvaliable(false)
    const cashBackFromFetch = (
      await getCashBack(session.user.token, cashBackId)
    ).cashBack
    setCashBack(cashBackFromFetch)
    setAvaliable(true)
  }

  useEffect(() => {
    fetchCashBack()
  }, [])

  const handleSendNotification = async () => {
    await createCashBacksNoti(session.user.token, cashBackId)
  }

  return (
    <main className='w-full flex flex-col space-y-10'>
      {/* Header */}
      <div className='font-semibold text-3xl mt-10'>โอนคืนส่วนลด</div>

      {/* cashback shop list */}
      {cashBack ? <CashBackShopList cashBack={cashBack} /> : ""}

      {/* cashback table */}
      {cashBack ? <CashBackDetailTable orders={cashBack?.orders} /> : ""}

      <Button
        variant='contained'
        color='primary'
        className='mt-10 w-full'
        onClick={handleSendNotification}>
        แจ้งเตือนซ้ำ
      </Button>
    </main>
  )
}
