export default async function createShop(
  token: string,
  shopData: {
    name: string
    shopCode: string
    province: string
    score: number
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
    alert("Cannot create shops " + (await response.json()).message)
    return null
  }

  return await response.json()
}
