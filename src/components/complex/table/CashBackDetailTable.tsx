import { Order } from "@/interface/cashBack"

export default function CashBackDetailTable({ orders }: { orders: Order[] }) {
  return (
    <table className='w-full table-auto border-collapse'>
      <thead className='text-left !font-semibold'>
        <tr className='bg-gray-100 border'>
          <th className='py-3 pl-3'>โปรโค้ด</th>
          <th className='py-3'>ราคา</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((row) => (
          <tr key={row._id} className='border'>
            <td className='py-3 pl-3'>{row.code}</td>
            <td className='py-3'>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
