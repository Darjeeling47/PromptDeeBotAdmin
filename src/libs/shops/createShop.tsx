export default async function createShop(
  token: string,
  shopData: {
    name: string
    shopCode: string
    province: string
  }
) {
  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/shops`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(shopData),
  })

  if (!response.ok) {
    alert("สร้างร้านค้าไม่สำเร็จ")
    return null
  }

  return await response.json()
}
