import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import SettingButton from "../button/SettingButton"
import { CashBack } from "@/interface/cashBack"
import { Session } from "next-auth"
import deleteCashBack from "@/libs/cashBacks/deleteCashBack"

export default function CashBackTable({
  cashBacks,
  available,
  session,
}: {
  cashBacks?: CashBack[]
  available?: boolean
  session: Session
}) {
  const handleDeleteCashBack = async (cbid: string) => {
    await deleteCashBack(session.user.token, cbid)
    alert("ลบข้อมูลแล้วกรุณารีเพจ")
  }

  return (
    <table className='w-full table-auto border-collapse'>
      <thead className='text-left !font-semibold'>
        <tr className='bg-gray-100 border'>
          <th className='py-3 pl-3'>ชื่อร้านค้า</th>
          <th className='py-3'>รหัสร้านค้า</th>
          <th className='py-3'>ราคารวม</th>
          <th className='py-3'>รอบวันที่</th>
          <th className='py-3'>วันโอน</th>
          <th className='py-3'></th>
        </tr>
      </thead>
      <tbody>
        {available ? (
          cashBacks && cashBacks.length > 0 ? (
            cashBacks.map((row) => (
              <tr key={row._id} className='border'>
                <td className='py-3 pl-3'>{row.shop.name}</td>
                <td className='py-3'>{row.shop.shopCode}</td>
                <td className='py-3'>{row.totalAmount}</td>
                <td className='py-3'>
                  {new Date(row.cycleDate).toLocaleDateString("th-TH")}
                </td>
                <td className='py-3'>
                  {new Date(row.payDate).toLocaleDateString("th-TH")}
                </td>
                <td className='w-20'>
                  <SettingButton
                    viewOption
                    editOption
                    deleteOption
                    deleteFunction={() => handleDeleteCashBack(row._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className='text-center py-3'>
                No cash back available
              </td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan={5} className='text-center py-3'>
              Loading ...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
