import { CashBackFull } from "@/interface/cashBack"

export default function CashBackShopList({
  cashBack,
}: {
  cashBack: CashBackFull
}) {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-row space-x-5'>
        <h2 className='font-medium'>ร้านค้า :</h2>
        <p>{cashBack.shopName}</p>
      </div>
      <div className='flex flex-row space-x-5'>
        <h2 className='font-medium'>รหัสร้านค้า :</h2>
        <p>{cashBack.shopCode}</p>
      </div>
      <div className='flex flex-row space-x-5'>
        <h2 className='font-medium'>รอบวันที่ :</h2>
        <p>{new Date(cashBack.cycleDate).toLocaleDateString("th-TH")}</p>
      </div>
      <div className='flex flex-row space-x-5'>
        <h2 className='font-medium'>โอนวันที่ :</h2>
        <p>{new Date(cashBack.payDate).toLocaleDateString("th-TH")}</p>
      </div>
      <div className='flex flex-row space-x-5'>
        <h2 className='font-medium'>ยอดเงินรวม :</h2>
        <p>{cashBack.totalAmount}</p>
      </div>
    </div>
  )
}
