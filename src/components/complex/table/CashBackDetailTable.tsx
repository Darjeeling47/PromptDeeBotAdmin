export default function CashBackDetailTable() {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ]

  return (
    <table className='w-full table-auto border-collapse'>
      <thead className='text-left !font-semibold'>
        <tr className='bg-gray-100 border'>
          <th className='py-3 pl-3'>โปรโค้ด</th>
          <th className='py-3'>ราคา</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className='border'>
            <td className='py-3 pl-3'>{row.name}</td>
            <td className='py-3'>{row.calories}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
