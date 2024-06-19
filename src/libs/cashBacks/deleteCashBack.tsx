export default async function deleteCashBack(token: string, cbid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/cash-back/${cbid}`,
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
