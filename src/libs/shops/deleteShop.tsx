export default async function deleteShop(token: string, sid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/shops/${sid}`,
    {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` },
    }
  )

  if (!response.ok) {
    throw new Error("Cannot fetch shops")
  }

  return await response.json()
}
