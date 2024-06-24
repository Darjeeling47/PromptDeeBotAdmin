export default async function createShops(token: string, shopData: FormData) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/shops/create-many`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: shopData,
    }
  )

  if (!response.ok) {
    alert("Cannot create shops " + (await response.json()).message)
    return null
  }

  return await response.json()
}
