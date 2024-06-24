export default async function getShop(token: string, sid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/shops/${sid}`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    }
  )

  if (!response.ok) {
    alert("Cannot fetch shops")
    return null
  }

  return await response.json()
}
