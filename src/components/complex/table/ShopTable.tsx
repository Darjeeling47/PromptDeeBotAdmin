import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import SettingButton from "../button/SettingButton"
import { Shop } from "@/interface/shop"

export default function ShopTable({
  shops,
  available,
}: {
  shops?: Shop[]
  available?: boolean
}) {
  return (
    <table className='w-full table-auto border-collapse'>
      <thead className='text-left !font-semibold'>
        <tr className='bg-gray-100 border'>
          <th className='py-3 pl-3'>ชื่อร้านค้า</th>
          <th className='py-3'>รหัสร้านค้า</th>
          <th className='py-3'>จังหวัด</th>
          <th className='py-3'>คะแนน</th>
          <th className='py-3'></th>
        </tr>
      </thead>
      <tbody>
        {available ? (
          shops && shops.length > 0 ? (
            shops.map((row) => (
              <tr key={row.name} className='border'>
                <td className='py-3 pl-3'>{row.name}</td>
                <td className='py-3'>{row.shopCode}</td>
                <td className='py-3'>{row.province}</td>
                <td className='py-3'>{row.score}</td>
                <td className='w-20'>
                  <SettingButton editOption deleteOption />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className='text-center py-3'>
                No shops available
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
