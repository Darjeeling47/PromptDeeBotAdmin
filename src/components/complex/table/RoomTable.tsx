import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import SettingButton from "../button/SettingButton"
import { Room } from "@/interface/room"
import { Session } from "next-auth"
import deleteRoom from "@/libs/rooms/deleteRoom"

export default function RoomTable({
  rooms,
  available,
  session,
}: {
  rooms?: Room[]
  available?: boolean
  session: Session
}) {
  const handleDeleteRoom = async (rid: string) => {
    await deleteRoom(session.user.token, rid)
    alert("ลบข้อมูลแล้วกรุณารีเพจ")
  }

  return (
    <table className='w-full table-auto border-collapse'>
      <thead className='text-left !font-semibold'>
        <tr className='bg-gray-100 border'>
          <th className='py-3 pl-3'>ชื่อกลุ่ม / ไลน์บุคคล</th>
          <th className='py-3'>ชื่อร้านค้า</th>
          <th className='py-3'>รหัสร้านค้า</th>
          <th className='py-3'></th>
        </tr>
      </thead>
      <tbody>
        {available ? (
          rooms && rooms.length > 0 ? (
            rooms.map((row) => (
              <tr key={row._id} className='border'>
                <td className='py-3 pl-3'>{row.roomName}</td>
                <td className='py-3'>{row.shops.name}</td>
                <td className='py-3'>{row.shops.shopCode}</td>
                <td className='w-20'>
                  <SettingButton
                    editOption
                    deleteOption
                    deleteFunction={() => handleDeleteRoom(row._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className='text-center py-3'>
                No room available
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
